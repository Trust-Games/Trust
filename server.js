const G_LIMIT = 1000000000000; // 1 Trillion Credits

// REGISTRATION VALIDATION
function validateUser(username, display_name) {
    const regex = /^[a-zA-Z0-9_]+$/; // Letters, numbers, underscores ONLY
    if (!regex.test(username) || !regex.test(display_name)) return false;
    if (username.length > 20) return false;
    return true;
}

// ADMIN ACTIONS
async function handleAdminAction(adminUser, actionType, data) {
    if (!adminUser.is_admin && !adminUser.is_owner) return "Unauthorized";

    if (actionType === "GRANT_CREDITS") {
        if (data.amount > G_LIMIT) return "Error: Limit is 1 Trillion";
        // Logic to update Supabase 'credits' column
    }

    if (actionType === "BAN_USER") {
        // Logic to set 'is_banned' = true and save 'ban_reason'
        // Logic to drop a 'banned' cookie on the client
    }
}
