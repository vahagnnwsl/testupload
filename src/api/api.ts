import axios from "axios";
import {Site, Status, Test} from "../shared/types.ts";
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3100'
});

export const getSites = async (): Promise<Site[]> => {
    try {
        const response = await axiosInstance.get('/sites');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching sites: ' + error);
    }
};

export const getSiteById = async (id: number): Promise<Site> => {
    try {
        const response = await axiosInstance.get(`/sites/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching site with id ${id}: ` + error);
    }
};

export const getTests = async (): Promise<Test[]> => {
    try {
        const response = await axiosInstance.get('/tests');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching tests: ' + error);
    }
};

export const getTestById = async (id: number): Promise<Test> => {
    try {
        const response = await axiosInstance.get(`/tests/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching test with id ${id}: ` + error);
    }
};

export const getTestsBySiteId = async (siteId: number): Promise<Test[]> => {
    try {
        const response = await axiosInstance.get(`/tests?siteId=${siteId}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching tests for site with id ${siteId}: ` + error);
    }
};

export const getTestsByStatus = async (status: Status): Promise<Test[]> => {
    try {
        const response = await axiosInstance.get(`/tests?status=${status}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching tests with status ${status}: ` + error);
    }
};