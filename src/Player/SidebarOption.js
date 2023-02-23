import './Sidebar.css'

export const SidebarOption=({title,Icon})=>{
    return (
        <div className={`sidebar-options`}>
            <div>{Icon && <Icon/>}</div>
            <div>{title}</div>
        </div>
    )
}