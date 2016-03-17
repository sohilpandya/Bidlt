var React = require('react');

var BackOfficeButtonPage = React.createClass({

  componentDidMount(){

    $(document).ready(function(){
      $('.modal-trigger').leanModal();
    });

  },

  render: function(){
    return (
      <div className="builder-backoffice-buttons main-padding margin-30">
        <div className="row">
          <div className="col s12 l2 offset-l3 backoffice-button-outer-div " >
            <div className="backoffice-button-individual valign-wrapper  " >
              <div className="valign backoffice-icon-text">
                <a className="modal-trigger" href="#job-history">
                 <i className="material-icons large">history</i>
                <h5 className="">
                Job History
                </h5>
                </a>

              </div>
            </div>
          </div>
          <div className="col s12 l2 backoffice-button-outer-div" >
            <div className="backoffice-button-individual  valign-wrapper" >
              <div className="valign backoffice-icon-text">
                 <i className="material-icons large">people</i>
                <h5 className="">
                Worker Details
                </h5>
              </div>
            </div>
          </div>
          <div className="col s12 l2" >
            <div className="backoffice-button-individual valign-wrapper" >
              <div className="valign backoffice-icon-text">
                <a className="modal-trigger" href="#invoices">
                 <i className="material-icons large">credit_card</i>
                <h5 className="">
                Invoice
                </h5>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="backoffice-button-outer-div col s12 l2 offset-l4" >
            <div className="backoffice-button-individual valign-wrapper" >
              <div className="valign backoffice-icon-text">
                 <i className="material-icons large">healing</i>
                <h5 className="">
                H & S
                </h5>
              </div>
            </div>
          </div>
          <div className=" col s12 l2" >
            <div className="backoffice-button-individual valign-wrapper" >
              <div className="valign backoffice-icon-text">
                 <i className="material-icons large">done_all</i>
                <h5 className="">
                HR
                </h5>
              </div>
            </div>
          </div>
        </div>

      <div className="modal" id="job-history">
        <div className="modal-content">

          <h5 className="center">Job History</h5>

            <ul className="collection">
              <li className="collection-item avatar">
              <img src='http://www.ecology.com/wp-content/uploads/2012/02/exterior-build.jpg' alt="" className="circle" />
              <span className="title job-result-title">Wooden Flooring for the whole house</span>
              <p className="darkest-text-color job-result-trade">Carpenter - Self Build
              <br></br>
              <br></br>
              </p>
              <p className="truncate">
              Mahogany Wood flooring for house build Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex e
                <br></br>

              </p>
            </li>
              <li className="collection-item avatar">
              <img src='http://www.ecology.com/wp-content/uploads/2012/02/exterior-build.jpg' alt="" className="circle" />
              <span className="title job-result-title">Wooden Flooring for the whole house</span>
              <p className="darkest-text-color job-result-trade">Carpenter - Self Build
              <br></br>
              <br></br>
              </p>
              <p className="truncate">
              Mahogany Wood flooring for house build Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex e
                <br></br>
              </p>
            </li>
            </ul>


          <div className="modal-footer">
              <a className="modal-action modal-close btn center primary-color waves-effect hover-color waves-light">Close</a>
          </div>

        </div>
      </div>

      <div className="modal" id="invoices">
        <div className="modal-content">

          <h5 className="center">Invoices</h5>

            <table className="bordered responsive-table highlight">
              <thead>
                <tr>
                    <th data-field="id">Name</th>
                    <th data-field="name">Description</th>
                    <th data-field="price">Due Date</th>
                    <th data-field="price">Fees</th>

                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Mahogany Wood flooring for house build</td>
                  <td>01/03/2016</td>
                  <td>£1000.80</td>


                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Mahogany Wood flooring for house build</td>
                  <td>01/03/2016</td>
                  <td>£1000.80</td>

                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Mahogany Wood flooring for house build</td>
                  <td>01/03/2016</td>
                  <td>£1000.80 </td>

                </tr>
              </tbody>
          </table>

          <div className="modal-footer">
              <a className="modal-action modal-close btn center primary-color waves-effect hover-color waves-light">Close</a>
          </div>

        </div>
      </div>



    </div>

    );
  }
});

module.exports = BackOfficeButtonPage;
