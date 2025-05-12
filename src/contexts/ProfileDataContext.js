import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";
import { followHelper } from "../utils/utils";

export const ProfileDataContext = createContext()
export const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

export const ProfileDataProvider = ({ children }) => {
    const [profileData, setProfileData] = useState({
        // We will use for our profile page later!
        pageProfile: { results: [] },
        popularProfiles: { results: [] }
    })

    const currentUser = useCurrentUser();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(
                    '/profiles/?ordering=-followers_count'
                )
                console.log(data)
                setProfileData((prevState) => ({
                    ...prevState,
                    popularProfiles: { results: data.results },
                }))
            } catch (err) {
                console.log(err)
            }
        }
        handleMount()
    }, [currentUser])

    const handleFollow = async (clickedProfile) => {
        try {
            const { data } = await axiosRes.post('/followers/', {
                followed: clickedProfile.id
            })
            setProfileData((prevState) => ({
                ...prevState,
                pageProfile: {
                    results: prevState.pageProfile.results.map(
                        profile => followHelper(profile, clickedProfile, data.id)),
                },
                popularProfiles: {
                    ...prevState.popularProfiles,
                    results: prevState.popularProfiles.results.map(
                        profile => followHelper(profile, clickedProfile, data.id)),
                },
            }));
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <ProfileDataContext.Provider value={profileData}>
            <SetProfileDataContext.Provider value={{setProfileData, handleFollow}}>
                {children}
            </SetProfileDataContext.Provider>
        </ProfileDataContext.Provider>
    )
} 