import {createAsyncThunk} from '@reduxjs/toolkit';

import request from '@app/services/request-service';

import { fallBackErrorMessage } from '@app/constants/app-constants';


export const login = createAsyncThunk(
    'user/login',
    async (params, {}) => {
        const { onSuccess, onError, data: formData } = params || {};

        try {
            const user  = await request({
                url:`/auth/login`,
                method: 'POST',
                data: formData
            });

            const { message } = user || {}

            if(message) {
                onError(message);
                return;
            }

    
            onSuccess(user);


        } catch (error) {
            const message = error?.message || fallBackErrorMessage || '';
            if (onError) {
                onError(message);
            }
        }
    },
); 

export const createAccount = createAsyncThunk(
    'user/create-account',
    async (params, {}) => {
        const { onSuccess, onError, data: formData } = params || {};

        try {
            const user  = await request({
                url:`/users/add`,
                method: 'POST',
                data: formData
            });

            const { message } = user || {}

            if(message) {
                onError(message);
                return;
            }

    
            onSuccess(user);


        } catch (error) {
            const message = error?.message || fallBackErrorMessage || '';
            if (onError) {
                onError(message);
            }
        }
    },
); 