import { FieldValues, useForm } from "react-hook-form";
const Form = () => {
  interface FormData {
    name: string;
    age: number;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  //   const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();
  //     console.log(person);
  //   };

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          //   onChange={(event) =>
          //     setPerson({ ...person, name: event.target.value })
          //   }
          {...register("name", { required: true, minLength: 3 })}
          // value={person.name}
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The Name field is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The Name Must be three letter</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          type="number"
          //   onChange={(event) =>
          //     setPerson({
          //       ...person,
          //       age: parseInt(event.target.value),
          //     })
          //   }
          {...register("age")}
          //   value={person.age}
          id="age"
          className="form-control"
        ></input>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
