const FactCard = props => {
    const {fact}=props;

    return(
        <div className="card col-12 category">
            <div className="card-body">
                <p className="card-title">Hello {fact.Content} </p>
                <h6 className="card-subtitle text-muted my-3">Hello </h6>
            </div>


        </div>



    )
}
export default FactCard;