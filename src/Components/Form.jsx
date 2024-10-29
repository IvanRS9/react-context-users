import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const json = await response.json();
        console.log(json);
        toast.success('User added successfully', {
            description: `Name: ${json.name}, Job: ${json.job}`
        });
    }

    const modify = async (data) => {
        const response = await fetch('https://reqres.in/api/users/2', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const json = await response.json();
        console.log(json);
        toast.success('User modified successfully', {
            description: `Name: ${json.name}, Job: ${json.job}`
        });
    }

    return (
        <div>
            {/* Formulario para agregr y modificar la informacion */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" {...register("name")} />
                </div>
                <div className="form-group">
                    <label htmlFor="job">Job</label>
                    <input type="job" className="form-control" id="job" placeholder="Enter Job" {...register("job")} />
                </div>
                {errors.exampleRequired && <span>This field is required</span>}
                
                <button type="submit" className="btn btn-primary" onClick={() => handleSubmit(onSubmit)()}>Add User</button>
                <button type="button" className="btn btn-secondary" onClick={() => handleSubmit(modify)()}>Modify User</button>
            </form>
        </div>
    )
}

export default Form
