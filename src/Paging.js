function Paging({current, total, onPageChange}) {
    let label = current === total ? "Previous": "Next";
    const onClickHandler = ()=>{
        let newPage = current === total ? (current - 1) : (current + 1);
        onPageChange(newPage);
    }
    return (
        <div>
            <button onClick={onClickHandler}>{label}</button>
        </div>
    );
}

export default Paging;