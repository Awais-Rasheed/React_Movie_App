import React from 'react'

export default function Register() {
  return (
    <div>
        <form>
            <h1>Register</h1>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Confirm Password</label>
    <input type="confirm-password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Signup</button>
</form>
    </div>
  )
}
