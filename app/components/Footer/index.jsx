import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
    componentDidMount(){
       console.log(document.body.clientHeight,window.screen.height);
       window.addEventListener('resize',function(){
            console.log(document.body.clientHeight,window.screen.height);
       })
    }   
     render() {
        return (
            <div id="footer">
                <footer>
    <div className="container">
        <div className="row">
            <section className="link">
                <p>
                    <span>版权所有：吉林市教育局 Copyright 2016 - 2017 JLEDU. All Rights Reserved</span>
                </p>
            </section>
        </div>
    </div>
</footer>
<section className="moblie-foot">
    <ul className="foot-list">
        <li>
            <a href="javascript:;">
                <svg t="1486257228474" className="icon" viewBox="0 0 1024 1024" version="1.1" p-id="2464" width="32" height="32">
						<path d="M978.221 507.167l-469.737-439.203-469.737 437.913c-9.189 8.567-9.702 22.975-1.114 32.155 8.579 9.173 23.004 9.692 32.187 1.105l438.629-408.894 438.649 410.139c4.401 4.112 9.987 6.144 15.563 6.144 6.070 0 12.143-2.411 16.623-7.209 8.596-9.173 8.123-23.568-1.065-32.149v0zM978.221 507.167z" fill="#333" p-id="2465"></path>
						<path d="M834.88 516.187c-12.573 0-22.772 10.193-22.772 22.75v348.839h-182.185v-242.67h-242.91v242.67h-182.178v-348.839c0-12.557-10.189-22.75-22.771-22.75-12.59 0-22.777 10.193-22.777 22.75v394.338h273.275v-242.669h151.819v242.669h273.268v-394.338c0.001-12.557-10.201-22.75-22.768-22.75v0zM834.88 516.187z" fill="#333" p-id="2466"></path>
						<path d="M675.472 190.101h136.635v121.332c0 12.576 10.201 22.755 22.772 22.755 12.569 0 22.769-10.179 22.769-22.755v-166.831h-182.177c-12.576 0-22.777 10.174-22.777 22.75-0.001 12.572 10.201 22.75 22.777 22.75v0zM675.472 190.101z" fill="#333" p-id="2467"></path>
					</svg>
                <p>首页</p>
            </a>
        </li>
        <li style={{width: "25.0%"}} className="current">
            <a href="/front/showcoulist">
                <svg t="1486257362855" className="icon"  viewBox="0 0 1024 1024" version="1.1" p-id="5482" width="30" height="30">
						<path d="M229.499951 913.188218c-48.914036-7.229658-80.168878-68.500117-58.45432-114.993011 17.700127-37.899168 77.866439-44.274366 114.710578-43.379996 12.209066 0.296759 22.588461-10.589173 22.588461-22.588461 0-214.33967 0-428.679339 0-643.020032 0-12.211113-10.349719-22.588461-22.588461-22.588461-79.519078 0-156.825768 13.127995-188.981119 97.637738-14.056134 36.941354-9.794064 79.658248-9.794064 118.503974 0 140.217509 0 280.435017 0 420.652526 0 34.616402-1.300622 69.511143 0 104.108103 3.175319 84.488253 66.817802 147.707087 151.284565 150.829194 116.201535 1.707898 521.665127 0.956791 671.114904 0 21.049409 0 27.852348-24.02723 15.972786-38.561247-39.46278-48.27754-42.548048-113.524566 0-161.04793 19.342534-21.60404-12.502755-53.66013-31.94455-31.94455-60.080354 67.105351-56.141648 156.255787 0 224.937029 5.324262-12.853749 10.648524-25.707498 15.972786-38.561247-208.42496 0-416.84992 0-625.27488 0-45.63434 0-90.661859 2.997264-124.948757-35.18843-31.254841-34.808784-26.997887-78.81709-26.997887-121.741715 0-125.962853 0-251.925706 0-377.88856 0-50.012044-1.000793-100.139721 0-150.142555 0.601704-30.04427 6.29231-57.972343 26.997887-81.227999 34.031071-38.22151 80.371492-35.18843 126.600373-35.18843-7.529487-7.529487-15.058974-15.058974-22.588461-22.588461 0 214.33967 0 428.679339 0 643.020032 7.529487-7.529487 15.058974-15.058974 22.588461-22.588461-60.922535-1.479701-144.667867 18.272155-161.406087 86.262666-16.9613 68.895113 19.038612 149.897985 93.140307 160.850431C245.930155 960.955128 258.202667 917.430846 229.499951 913.188218L229.499951 913.188218z" p-id="5483" fill="#d44920"></path>
						<path d="M361.056196 111.795179c137.728828 0 277.028431-6.541997 414.573063 0 56.018851 8.659217 110.147656 42.715871 112.727411 105.47217 0.642636 15.646352 0 31.460526 0 47.115064 0 88.575338 0 177.150676 0 265.72499 0 68.37732 0 136.75464 0 205.130937 7.529487-7.529487 15.058974-15.058974 22.588461-22.588461-183.296653 0-366.592282 0-549.888935 0 7.529487 7.529487 15.058974 15.058974 22.588461 22.588461 0-215.344556 0-430.688089 0-646.032646 0-29.069059-45.176922-29.117155-45.176922 0 0 215.344556 0 430.688089 0 646.032646 0 12.211113 10.349719 22.588461 22.588461 22.588461 183.296653 0 366.592282 0 549.888935 0 12.211113 0 22.588461-10.349719 22.588461-22.588461 0-156.952658 0-313.904293 0-470.856951 0-82.908268-11.682064-153.384389-102.450347-182.328605-30.673603-9.781784-66.485227-13.762445-102.756315-15.243169-69.480444-0.192382-73.621764-0.192382-116.468618-0.192382-83.601046 0-167.202093 0-250.802116 0C331.987137 66.618257 331.939041 111.795179 361.056196 111.795179z" p-id="5484" fill="#d44920"></path><path d="M510.185678 94.477768c0 113.695458 0 227.390917 0 341.086375 0 24.375154 29.352515 28.110221 42.092677 11.400654 29.27986-38.400588 58.559721-76.801177 87.840604-115.201765-11.825326 1.523703-23.651676 3.047406-35.477003 4.571109 29.826306 38.400588 59.652612 76.801177 89.479941 115.201765 12.533454 16.136515 38.561247 1.967818 38.561247-15.972786 0-113.695458 0-227.390917 0-341.086375 0-29.069059-45.176922-29.117155-45.176922 0 0 113.695458 0 227.390917 0 341.086375 12.853749-5.324262 25.707498-10.648524 38.561247-15.972786-29.826306-38.400588-59.652612-76.801177-89.479941-115.201765-9.933233-12.788258-27.79095-5.508457-35.477003 4.572132-29.27986 38.400588-58.559721 76.801177-87.839581 115.201765 14.030551 3.800559 28.062126 7.600095 42.092677 11.400654 0-113.695458 0-227.390917 0-341.086375C555.3626 65.408709 510.185678 65.360614 510.185678 94.477768L510.185678 94.477768z" p-id="5485" fill="#d44920"></path><path d="M361.056196 879.8049c165.349909 0 330.700841 0 496.05075 0 29.069059 0 29.117155-45.176922 0-45.176922-165.349909 0-330.700841 0-496.05075 0C331.987137 834.627978 331.939041 879.8049 361.056196 879.8049L361.056196 879.8049z" p-id="5486" fill="#d44920"></path>
					</svg>
                <p>课程</p>
            </a>
        </li>
        <li style={{width: "25.0%"}}>
            <a href="/front/liveIndex">
                <svg t="1486257689517" className="icon"  viewBox="0 0 1024 1024" version="1.1" p-id="11329" width="32" height="32">
          <path d="M438.615 605.87L629.76 438.615l-191.145-168.96V605.87z m240.635 332.8H344.745c-13.655 0-25.6-11.95-25.6-25.6 0-13.66 11.945-25.6 25.6-25.6H679.25c13.66 0 25.6 11.94 25.6 25.6 0 13.65-11.94 25.6-25.6 25.6z m179.538-453.14c-37.31 0.384-63.191 18.35-79.683 38.65-16.19-20.561-42.122-38.65-80.379-38.65-25.277 0-46.264 8.181-62.366 24.37-29.481 29.6-30.085 74.184-29.773 75.567-0.737 4.505-15.975 111.585 162.954 200.745a21.658 21.658 0 0 0 9.651 2.294 21.453 21.453 0 0 0 10.133-2.555C897.53 728.515 953.8 658.959 952.064 583.214c0.046-39.26-24.494-97.684-93.276-97.684z m-77.819 263.03c-144.297-75.736-136.213-154.287-135.542-160.953-0.046-8.356 3.226-35.63 18.335-50.785 8.161-8.213 19.01-12.206 33.213-12.206 48.057 0 60.396 43.878 61.573 48.737a22.62 22.62 0 0 0 21.602 17.423c9.933-1.09 19.553-6.625 22.369-16.558 0.594-2.002 14.474-49.1 63.483-49.602 50.642 0 51.185 54.722 51.236 59.714 1.275 56.5-47.007 114.54-136.269 164.23z" fill="#333" p-id="11330"></path>
          <path d="M177.495 738.99c-32.425 0-58.025-25.6-58.025-58.03v-486.4c0-32.425 25.6-58.025 58.025-58.025H846.51c32.42 0 58.02 25.6 58.02 58.025v228.623a319.078 319.078 0 0 1 49.5 7.133V194.56c1.7-59.735-47.79-109.225-107.52-109.225H177.495c-59.735 0-109.23 49.49-109.23 109.225v486.4c0 59.73 49.495 109.23 109.225 109.23h443.76a264.433 264.433 0 0 1-23.24-51.2H177.496z" fill="#333" p-id="11331"></path>
        </svg>
                <p>直播</p>
            </a>
        </li>
        <li style={{width: "25.0%"}}>
            <a href="javascript:h5FooterMyLogin();">
                <svg t="1486257862430" className="icon"  viewBox="0 0 1024 1024" p-id="17785" width="32" height="32">
						<path d="M511.674589 64.696488c-246.847038 0-446.956611 200.109574-446.956611 446.956611 0 94.231151 29.160133 181.651177 78.95012 253.727749 0 0 15.517415 21.547759 35.803437 9.270131 19.442818-11.768021 7.554046-34.44551 7.554046-34.44551-18.063401-24.635073-28.063149-46.14497-40.059368-74.507948-20.624736-48.762587-31.081902-100.589976-31.081902-154.044422 0-53.454446 10.457166-105.281835 31.081902-154.044422 19.931958-47.124274 48.477085-89.457428 84.842317-125.82266 36.365232-36.365232 78.698386-64.910359 125.82266-84.842317 48.762587-20.624736 100.589976-31.081902 154.044422-31.081902 53.454446 0 105.281835 10.457166 154.044422 31.081902 41.683355 17.630542 79.609129 42.012859 112.981191 72.572876l21.829168 21.586644c32.097022 34.219359 57.598836 73.345472 75.854619 116.506481 20.624736 48.762587 31.081902 100.589976 31.081902 154.044422 0 53.454446-10.457166 105.281835-31.081902 154.044422-19.931958 47.124274-48.477085 89.457428-84.842317 125.82266-5.247514 5.247514-10.634198 10.31288-16.127306 15.232936-7.247054-53.594639-33.886785-103.058191-76.816526-141.627624-24.589025-22.092158-53.120848-39.295981-84.133166-51.097772 46.131667-32.394804 76.2885-85.996606 76.2885-146.646941 0-98.902544-80.176041-179.078585-179.078585-179.078585s-179.078585 80.176041-179.078585 179.078585c0 60.651358 30.156834 114.252137 76.2885 146.646941-31.013341 11.80179-59.544141 29.005614-84.133166 51.097772-50.834782 45.671179-78.82937 106.616226-78.82937 171.609473 0 8.114818 0.179079 13.518898 1.193175 22.279423 0.470721 4.068665 1.876744 7.79964 3.970428 11.011798 4.293793 7.453762 10.69048 12.249999 10.69048 12.249999 71.334675 48.192605 157.330258 76.333526 249.897513 76.333526 246.848061 0 446.956611-200.109574 446.956611-446.956611S758.521626 64.696488 511.674589 64.696488zM383.761314 467.379757c0-34.167171 13.305027-66.288752 37.465287-90.447988 24.159236-24.159236 56.281841-37.465287 90.447988-37.465287s66.288752 13.305027 90.447988 37.465287c24.159236 24.159236 37.465287 56.281841 37.465287 90.447988s-13.305027 66.288752-37.465287 90.447988c-24.159236 24.159236-56.281841 37.465287-90.447988 37.465287s-66.288752-13.305027-90.447988-37.465287C397.066341 533.668509 383.761314 501.546927 383.761314 467.379757zM511.674589 907.444401c-53.454446 0-105.281835-10.457166-154.044422-31.081902-21.145599-8.943696-41.312918-19.643386-60.423161-31.984459-0.094144-2.240017-0.119727-4.589528-0.119727-7.643074 0-104.875582 96.263437-190.19783 214.58731-190.19783s214.58731 85.322248 214.58731 190.19783c0 2.555196-0.076748 5.127787-0.193405 7.701402-19.086707 12.319583-39.232536 22.99369-60.349483 31.92613C616.956424 896.987235 565.128011 907.444401 511.674589 907.444401z" p-id="17786" fill="#333"></path>
					</svg>
                <p>我的</p>
            </a>
        </li>
    </ul>
</section>
            </div>
        );
    }
}

export default Footer;