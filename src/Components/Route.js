import Logo from '../Image/logo-icon.svg'
import Dashboard from '../Image/dashboard-active.svg'
import Enquiries from '../Image/enquiries.svg'
import Sidebar from './Sidebar';
import Appoint from '../Image/appointments.svg';
import Graph from '../Image/graph.svg';
import Msg from '../Image/messages.svg';
import User from '../Image/users.svg';
import Setting from '../Image/settings.svg'


const Route = () => {

    const dashboardRoutes =  [
        {
          path: "/dashboard",
          icon: <img src={Logo} alt="logo"/>,
          logo : true
        },
        
        {
          path: "/",
          icon: <img src={Dashboard} alt="dashboard"/>
        },
        
        {
          icon : <img src={Graph} alt="graph"/>
        },
        
        {
          icon : <img src={Appoint} alt="appoint"/>
        },

        {
          icon: <img src={Enquiries} alt="enquiries"/>,
        },

        {
          icon: <img src={Msg} alt="msg"/>,
        },
        {
        icon: <img src={User} alt="user"/>,
        },
        {
          icon : <img src={Setting} alt="setting"/>
        }
      ]  
      return(<>
          <Sidebar dashboard={dashboardRoutes} main={true}/>
          </>
      )
}

export default Route