import {createAsyncThunk} from '@reduxjs/toolkit';
import request from '@app/services/request-service';
import { fallBackErrorMessage } from '@app/constants/app-constants';

export const getRecentProducts = createAsyncThunk(
    'product/recent',
    async (params, {}) => {
        const { onSuccess, onError } = params || {};

        try {
            const { products, message } = await request({
                url:`/products?limit=10`,
                method: 'GET'
            });

            if(!products) {
                onError(message);
                return;
            }

    
            onSuccess(products);


        } catch (error) {
            const message = error?.message || fallBackErrorMessage || '';
            if (onError) {
                onError(message);
            }
        }
    },
); 


export const getCategories = createAsyncThunk(
    'product/categories',
    async (params, {}) => {
        const { onSuccess, onError } = params || {};

        try {
            const data = await request({
                url:`/products/categories`,
                method: 'GET'
            });

            if(!data) {
                onError();
                return;
            }

    
            onSuccess(data);


        } catch (error) {
            const message = error?.message || fallBackErrorMessage || '';
            if (onError) {
                onError(message);
            }
        }
    },
); 


export const getProducts = createAsyncThunk(
    'product/list',
    async (params, {}) => {
        const { onSuccess, onError } = params || {};

        try {
            const { products, message } = await request({
                url:`/products?limit=30`,
                method: 'GET'
            });

            if(!products) {
                onError(message);
                return;
            }

    
            onSuccess(products);


        } catch (error) {
            const message = error?.message || fallBackErrorMessage || '';
            if (onError) {
                onError(message);
            }
        }
    },
); 