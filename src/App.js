import styles from './App.module.css';
import icon from './assets/icon.png'
import FilterType from './components/FilterType';
//import PersonIcon from '@mui/icons-material/Person';
// import PhoneIcon from '@mui/icons-material/Phone';
// import EmailIcon from '@mui/icons-material/Email';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// import SupportIcon from '@mui/icons-material/Support';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <img src={icon} alt='Icon' id={styles.icon}/>
          <span>
            {/* <PhoneIcon /> */}+10229528
          </span>
          <span>
            {/* <EmailIcon /> */}info@EventTitans.com
          </span>
        </div>
        <div className={styles.headerRight}>
          <span>
            {/* <SupportIcon /> */}
          </span>
          <span>
            {/* <PersonIcon /> */}Login | Register
          </span>
          <span id={styles.createEvent}>
            {/* <StarBorderIcon /> */}Create Event
          </span>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.filters}>
          <h2>Filter</h2>
            <FilterType title='Name' defultValue='Model' options={['Ascending', 'Descending']} />
            <FilterType title='Price' defultValue='From' options={['Low->High', 'High->Low']} />
            <FilterType title='Rate' defultValue='Type' options={['Ascending', 'Descending']} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
