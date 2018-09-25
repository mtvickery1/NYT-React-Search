import React from "react";


const Form = () => (

    <div className="row border border-dark rounded m-5">
    <div className="col-12 bg-warning current">
                Search for Articles
            </div>
        <div className="col-12">
            <form className="p-3">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Search Term:</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" />



                    <label htmlFor="exampleInputEmail1">Number of Records to Retrieve:</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" />



                    <label htmlFor="exampleInputEmail1">Start Year (Optional):</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" />



                    <label htmlFor="exampleInputEmail1">End Year (Optional):</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" />
                </div>

                <button type="submit" className="btn btn-primary btn-dark">Submit</button>
            </form>
        </div>
    </div>

);

export default Form;