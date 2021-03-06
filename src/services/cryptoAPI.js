import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
   
    'x-access-token': 'coinranking0de0d139cced1bc906413bf5415a7786d0eaae38b44a7e27',
   
    
}
const apikey = "coinranking0de0d139cced1bc906413bf5415a7786d0eaae38b44a7e27"

//const baseUrl = 'https://coinranking1.p.rapidapi.com'


const baseUrl = 'https://api.coinranking.com/v2'

const createRequest = (url) => ({
    url , headers : cryptoApiHeaders
})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints : (builder) => ({
        getCryptos: builder.query({
            query : (count) => createRequest(`/coins?x-access-token=coinranking0de0d139cced1bc906413bf5415a7786d0eaae38b44a7e27`)
        }),
        getCryptoDetails: builder.query({
            query : (coinId) => 
            createRequest(`/coin/${coinId}`)
        })
    })
})

export const { 
    useGetCryptosQuery,
} = cryptoApi


export const { 
    useGetCryptoDetailsQuery,
} = cryptoApi



// This creates a hook which allows you to make API requests 


