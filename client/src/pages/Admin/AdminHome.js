/**
 * The AdminHome component is a React component that displays a welcome message and some information
 * for the admin user.
 * @returns The AdminHome component is returning a JSX element.
 */
import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank Inventory </h3>
          <hr />
          <p>
            Your role as an administrator for our blood bank inventory is
            pivotal in maintaining a steady and safe supply of blood and related
            products. You're at the forefront of ensuring that our inventory
            remains well-stocked, properly managed, and readily available for
            medical emergencies and treatments. <br></br>
            <br></br>
            Your responsibilities involve overseeing donation drives, ensuring
            the proper storage and handling of blood products, and coordinating
            with medical facilities to meet their specific requirements. Regular
            inventory checks, quality control, and adherence to safety protocols
            are crucial aspects of your role. <br></br>
            <br></br>Additionally, you'll be working closely with medical
            professionals, donors, and volunteers, fostering strong
            relationships within our community to encourage blood donations and
            support our cause. Your efforts contribute directly to saving lives
            and improving healthcare outcomes for those in need. <br></br>
            <br></br>As an administrator, your dedication, organization, and
            attention to detail are instrumental. Your commitment to excellence
            ensures that patients receive the life-saving blood products they
            require promptly and safely. Thank you for your invaluable
            contribution to our mission. Together, we're making a profound
            difference in our community's health and well-being.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
