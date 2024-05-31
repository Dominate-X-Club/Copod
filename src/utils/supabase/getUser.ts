import { createClient } from './client';

export async function getUser() {
    const supabase = createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error) {
        console.log(`Failed to get user: ${error.message}`);
    }

    return user;
}