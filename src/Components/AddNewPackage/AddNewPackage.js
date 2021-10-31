import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewPackage.css';

const AddNewPackage = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const formData = data;
        formData.details = formData.details.split(",");
        let trimedDetails = formData.details.map(detail => detail.trim());
        formData.details = trimedDetails;
        
        fetch('http://localhost:5000/package', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    alert('Package Inserted');
                    reset();
                }
                else {
                    
                }
            });
        
    }
    return (
        <div className="container py-5">
            <h1 className="text-center">Add A New Service</h1>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label className="form-label">Package Name</label>
                        <input type="text" className="form-control" {...register("name", { required: true })} />
                        <p className="text-danger">{errors.name?.type === 'required' && "Package Name is required"}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Duration</label>
                        <input type="text" placeholder="" className="form-control mb-2" {...register("duration", { required: true })} />
                        <p className="text-danger">{errors.duration?.type === 'required' && "Duration is required"}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Details</label>
                        <textarea type="text" placeholder="Write Details and Seperate with comma" className="form-control mb-2" {...register("details", { required: true })} />
                        <p className="text-danger">{errors.details?.type === 'required' && "Details is required"}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Image Link</label>
                        <input type="text" placeholder="Paste Image Link Here" className="form-control mb-2" {...register("image", { required: true })} />
                        <p className="text-danger">{errors.image?.type === 'required' && "Image Link is required"}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input type="text" placeholder="" className="form-control mb-2" {...register("price", { required: true })} />
                        <p className="text-danger">{errors.price?.type === 'required' && "Price is required"}</p>
                    </div>

                    <input className="btn btn-dark" type="submit" value="Add New Service" />
                </form>
            </div>
        </div>
    );
};

export default AddNewPackage;