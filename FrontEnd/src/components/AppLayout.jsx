export function AppLayout({ children }) {
    return (
        <div className="min-h-dvh w-full bg-white">
            <div className="min-h-dvh w-full max-w-2xl mx-auto flex flex-col overflow-x-hidden bg-[#F3F4F6] shadow-sm">
                { children }
            </div>
        </div>
    );
}