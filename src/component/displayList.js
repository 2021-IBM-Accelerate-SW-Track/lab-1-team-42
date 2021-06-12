function display(list){
    if(list.length === 0){
        return(
            <div>
                <h2>NO ITEMS</h2>
            </div>
        );
    }
    else{
        return(
            <div>
                <h2>SOME ITEMS</h2>
            </div>
        );
    }
}

export default display;