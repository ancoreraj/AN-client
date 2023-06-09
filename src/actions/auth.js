import axios from "axios"
import { toast } from "react-hot-toast";
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;
export const GoogleLogin = async (accessToken) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/auth/login`, {
            googleAccessToken: accessToken
        })
        return data;
    } catch (err) {
        toast.error(err.response.data.message)
    }
}

export const collegeInput = async (collegeName) => {
    try {
        const data = await axios.post(`${BASE_URL}/collegeinput`, {
            collegeName: collegeName
        }, {
            headers: {
                authorization: `Token ${localStorage.getItem("token")}`
            }
        })
        return data;
    } catch (err) {
        toast.error(err.response.data.message)
    }
}

export const topContributor = async (collegeName) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/top`,{
            collegeName:collegeName
        })
        return data;
    } catch (err) {
        toast.error(err)
    }
}

export const getAllColleges = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/Colleges`)
        return data;
    } catch (err) {
        toast.error(err.response.data.message)
    }
}

export const uploadNotes = async (driveUrl, title, year, branch) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/uploadNotes`, {
            driveUrl: driveUrl,
            title: title,
            year: year,
            branch: branch
        }, {
            headers: {
                authorization: `Token ${localStorage.getItem("token")}`
            }
        })
        return data;
    } catch (err) {
        console.log(err)
        toast.error(err.response.data.message)
    }
}