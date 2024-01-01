export const USER_ROLE = {
    user: 'user',
    admin: 'admin',
    faqulty: 'faqulty',
} as const;

type TUserRole = keyof typeof USER_ROLE;