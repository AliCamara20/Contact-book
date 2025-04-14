
const Tablink = (props: { isActive:boolean, tabLabel: string, onShow: () => void  }) => { 
  return (
    <button className={ props.isActive ? ' tab_link tab_link--active' : 'tab_link'} onClick={props.onShow} >
        {props.tabLabel}
    </button>

  );
}

export default Tablink;