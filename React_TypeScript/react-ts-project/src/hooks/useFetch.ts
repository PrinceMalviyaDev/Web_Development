import { useState, useEffect } from 'react';

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null
    });

    // useEffect to make fetch request

    useEffect(() => {

        async function fetchData() {
            try {
                const res = await fetch(url)
                const data = await res.json()

                setState({
                    data,
                    loading: false,
                    error: null
                })

            } catch (err) {

                setState({
                    data: null,
                    loading: false,
                    error: err + ""
                })

            }
        }

        fetchData()

    }, [url])


    return state;
}

