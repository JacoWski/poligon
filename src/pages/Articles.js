import React from "react";

// import Employees from "components/Employees";
// import data from 'DataFactory/employeesData';
// import Restaurant from "pages/Restaurant";
// import User from "pages/User";
// import UsersWithFormik from "pages/UsersWithFormik";
// import UserReactFormHook from "pages/UserReactFormHook";
import ExpensesApp from "pages/ExpensesApp";

const Article = () => {
    return(
        <div className="article">
            {/* <Restaurant/>
            <User/>
            <UsersWithFormik/> */}
            {/* <UserReactFormHook/> */}
            <ExpensesApp/>
            {/* {data.map((e) => (
                <Employees name={e.name}
                            familyName={e.familyName}
                            age={e.age}
                            wage={e.wage}
                            position={e.position}
                 />
            ))} */}
        </div>
    );
};

export default Article;
