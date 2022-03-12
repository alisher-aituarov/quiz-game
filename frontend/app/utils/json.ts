export const isJSON = (str: string | null | undefined) => {
    if (typeof str !== 'string') {
        return false;
    }
    try {
        JSON.parse(str);
        return true;
    } catch (error) {
        return false;
    }
};
