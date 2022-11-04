import React from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUser = searchParams.get('filter') === 'active';
  return (
    <nav>
      <Link to="/users/1">User 1</Link>
      <Link to="/users/2">User 2</Link>
      <div>Users</div>
      <Outlet />
      <button onClick={() => setSearchParams({ filter: 'active' })}>
        Active users
      </button>
      &nbsp;&nbsp;
      <button onClick={() => setSearchParams({})}>All users</button>
      <br />
      {showActiveUser ? <h1>Active user</h1> : <h1>All users</h1>}
    </nav>
  );
};
