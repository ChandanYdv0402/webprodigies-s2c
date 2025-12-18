'use client'

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/store";
import { setProfile } from "@/redux/slice/profile";
import { normalizeProfile, ConvexUserRaw } from "@/types/user";

export const ReduxAuthSync = () => {
    const user = useQuery(api.user.getCurrentUser);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (user === undefined) return; // Loading state

        const normalized = normalizeProfile(user as unknown as ConvexUserRaw | null);
        dispatch(setProfile(normalized));
    }, [user, dispatch]);

    return null;
}
