export const Spinner = () => {
    return (
        <div className="flex justify-center items-center py-2">
            <div
                style={{ borderTopColor: 'transparent' }}
                className="w-8 h-8 border-4 border-blue-400 border-dashed rounded-full animate-spin"
            ></div>
        </div>
    );
};
