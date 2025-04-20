import Tablink from "./Tablink.tsx"
interface TabProps  {
    activeIndex: number
    onActive: (arg: number) => void
}
const Tablinks = (props: TabProps) => {  
    return (
        <div className="tabs">
            <div className="tab_links">
                <Tablink tabLabel="Add Contact" isActive={props.activeIndex === 0} onShow={ () =>props.onActive(0)} />
                <Tablink tabLabel="View Contact" isActive={props.activeIndex === 1}  onShow={ () =>props.onActive(1)}/>
            </div>
        </div>
        
    )
}

export default Tablinks;


