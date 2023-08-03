export const Container = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="flex">
            {children}
        </div>
    )
}