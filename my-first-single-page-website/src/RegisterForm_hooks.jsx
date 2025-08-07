import './App.css';
import { useState } from 'react';

function RegisterForm_hooks() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    semester: '',
    gender: '',
    message: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validate each field individually
    if (form.name === '') {
      newErrors.name = 'Please fill name';
    }

    if (form.email === '') {
      newErrors.email = 'Please fill email';
    } else if (!form.email.includes('@') || !form.email.includes('.') || form.email.indexOf('@') > form.email.lastIndexOf('.') || form.email.indexOf('@') === 0 || form.email.indexOf('.') === form.email.length - 1) {
      newErrors.email = 'Invalid email format';
    }

    if (form.mobile === '') {
      newErrors.mobile = 'Please fill mobile number';
    } else if (form.mobile.length !== 10 || isNaN(form.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }

    if (form.semester === '') {
      newErrors.semester = 'Please select semester';
    }

    if (form.gender === '') {
      newErrors.gender = 'Please select gender';
    }

    if (form.message === '') {
      newErrors.message = 'Please fill message';
    }

    if (form.password === '') {
      newErrors.password = 'Please fill password';
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (form.confirmPassword === '') {
      newErrors.confirmPassword = 'Please fill confirm password';
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!form.agree) {
      newErrors.agree = 'Please agree to Terms & Conditions';
    }

    setErrors(newErrors);

    // If there are any errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // localStorage
    localStorage.setItem('registrationData', JSON.stringify(form));
    setErrors({});
    alert('Registration Successful!');
    setForm({
      name: '',
      email: '',
      mobile: '',
      semester: '',
      gender: '',
      message: '',
      password: '',
      confirmPassword: '',
      agree: false,
    });
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" placeholder="Enter Name" value={form.name} onChange={handleChange} />
          {errors.name && <p className="field-error">{errors.name}</p>}
        </label>

        <label>
          Email:
          <input type="email" name="email" placeholder="Enter Email" value={form.email} onChange={handleChange} />
          {errors.email && <p className="field-error">{errors.email}</p>}
        </label>

        <label>
          Mobile:
          <input type="text" name="mobile" placeholder="Enter Mobile No" value={form.mobile} onChange={handleChange} />
          {errors.mobile && <p className="field-error">{errors.mobile}</p>}
        </label>

        <label>
          Semester:
          <select name="semester" value={form.semester} onChange={handleChange}>
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          {errors.semester && <p className="field-error">{errors.semester}</p>}
        </label>

        <label>
          Gender:
          <input type="radio" name="gender" value="Male" checked={form.gender === 'Male'} onChange={handleChange} /> Male
          <input type="radio" name="gender" value="Female" checked={form.gender === 'Female'} onChange={handleChange} /> Female
          {errors.gender && <p className="field-error">{errors.gender}</p>}
        </label>

        <label>
          Message:
          <textarea name="message" placeholder="Enter Message" value={form.message} onChange={handleChange}></textarea>
          {errors.message && <p className="field-error">{errors.message}</p>}
        </label>

        <label>
          Password:
          <input type="password" name="password" placeholder="Enter Password" value={form.password} onChange={handleChange} />
          {errors.password && <p className="field-error">{errors.password}</p>}
        </label>

        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            placeholder="Enter Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p className="field-error">{errors.confirmPassword}</p>}
        </label>

        <label>
          <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
          I Agree Terms & Conditions
          {errors.agree && <p className="field-error">{errors.agree}</p>}
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm_hooks;