"use client"

import Image from "next/image"
import Link from "next/link"
import { Building2,  RefreshCcw, Scale, Handshake, Zap, User , Star} from "lucide-react"
import Button from "@/app/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen">
    {/* Hero Section with Curvy Backgrounds */}
    <section className="pt-20 bg-gradient-to-b from-pink-50 to-white overflow-hidden min-h-[70vh] relative">
    
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fade-in-1"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/1.mp4" type="video/mp4" />
        </video>
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fade-in-2"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/2.mp4" type="video/mp4" />
        </video>
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fade-in-3"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/3.mp4" type="video/mp4" />
        </video>
        
        <style jsx global>{`
          @keyframes fadeInOut {
            0% { opacity: 0; }
            5% { opacity: 1; }
            28.33% { opacity: 1; }
            33.33% { opacity: 0; }
            100% { opacity: 0; }
          }

          .animate-fade-in-1 {
            animation: fadeInOut 30s infinite;
          }

          .animate-fade-in-2 {
            animation: fadeInOut 30s infinite 10s;
          }

          .animate-fade-in-3 {
            animation: fadeInOut 30s infinite 20s;
          }
        `}</style>
          </div>
      

        {/* Rest of the hero section content remains the same */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-end h-[70vh]">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 pb-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900  mb-4 leading-tight">
                Smart Real Estate Financing
              </h1>
              <p className="hidden sm:block text-sm sm:text-lg font-bold text-gray-900 mb-6 leading-relaxed">
                We provide fast and reliable financing solutions for real estate investors. Our technology-powered
                platform streamlines the entire investment process.
              </p>
              <Link href="/get-pre-qualified">
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white w-full">
                  Get Pre-qualified
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    {/* Products Grid - Improved grid responsiveness */}
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Fix and Flip Card */}
          <div className="group p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-pink-200">
            <div className="h-12 w-12 mb-6 text-grey-400">
              <RefreshCcw className="h-full w-full" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Fix and Flip / Bridge</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Access quick closings with high leverage for renovation projects. Our bridge loans help you seize opportunities in the real estate market.
            </p>
            <Link
              href="/fix-flip"
              className="inline-flex items-center text-pink-600 font-semibold group-hover:text-pink-700"
            >
              Learn More
              <span className="ml-2">→</span>
            </Link>
          </div>

          {/* New Construction Card */}
          <div className="group p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-pink-200">
            <div className="h-12 w-12 mb-6 text-grey-400">
              <Building2 className="h-full w-full" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">New Construction</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Get streamlined financing for new construction projects. Our flexible terms support your development goals from ground breaking to completion.
            </p>
            <Link
              href="/new-construction-infill"
              className="inline-flex items-center text-pink-600 font-semibold group-hover:text-pink-700"
            >
              Learn More
              <span className="ml-2">→</span>
            </Link>
          </div>

          {/* DSCR Rental Card */}
          <div className="group p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-pink-200">
            <div className="h-12 w-12 mb-6">
              <Image
                src="/1.avif"
                alt="Rising Chart Icon"
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">DSCR Rental</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Optimize your rental income with flexible terms and competitive rates. Our DSCR loans are designed for long-term rental property investments.
            </p>
            <Link
              href="/dscr-rental"
              className="inline-flex items-center text-pink-600 font-semibold group-hover:text-pink-700"
            >
              Learn More
              <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Rental Portfolio Card */}
          <div className="group p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-pink-200">
            <div className="h-12 w-12 mb-6 text-grey-400">
              <Building2 className="h-full w-full" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Rental Portfolio</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Consolidate multiple properties under one loan with customizable terms. Our portfolio loans simplify managing your real estate investments.
            </p>
            <Link
              href="/rental"
              className="inline-flex items-center text-pink-600 font-semibold group-hover:text-pink-700"
            >
              Learn More
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>



            
    {/* Fast Financing Section - Better mobile layout */}
    <section className="py-12 md:py-20 bg-pink-50">
      <div className="container mx-auto px-4">
       
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative">
            <Image
              src="/house.jpg"
              alt="Property with financing estimate"
              width={600}
              height={400}
              className="rounded-md shadow-lg"
            />
            <Link href="/get-pre-qualified" className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white">Get Pre-Qualified</Button>
            </Link>
          </div>
          <div>
            <Link href="https://calendly.com/robert-wc247" target="_blank" rel="noopener noreferrer">
              <Button className="mt-8 bg-pink-600 hover:bg-pink-700 text-white">Schedule a Meeting</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <Zap className="h-12 w-12 mx-auto mb-6 text-pink-600" />
            <h3 className="text-xl font-bold mb-4">Fast lending processes</h3>
            <p className="text-gray-600">
              Apply for flexible financing, get visibility into the process, and receive funding more quickly. It&apos;s
              that easy!
            </p>
          </div>
          <div className="text-center">
            <Scale className="h-12 w-12 mx-auto mb-6 text-pink-600" />
            <h3 className="text-xl font-bold mb-4">Competitive rates</h3>
            <p className="text-gray-600">
              Make confident offers and maximize returns with reliable capital, high leverage, and flexible loan
              options.
            </p>
          </div>
          <div className="text-center">
            <Handshake className="h-12 w-12 mx-auto mb-6 text-pink-600" />
            <h3 className="text-xl font-bold mb-4">Trusted support</h3>
            <p className="text-gray-600">
              Grow your business with experienced support from an industry-leading team from application to closing.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="py-12 md:py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Discover why over 15,000 real estate investors rely on WCI Capital Funding
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
            From beginners to experienced professionals, WCI Capital Funding facilitates swift financing, expert insights, and dependable funding to simplify real estate investing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Ratings Column */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">World-Class Recognition</h3>
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <svg className="w-24" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M120,76.1c0-3.1-0.3-6.3-0.8-9.3H75.9v17.7h24.8c-1,5.7-4.3,10.7-9.2,13.9l14.8,11.5C115,101.8,120,90,120,76.1L120,76.1z" fill="#4280EF"/>
                  <path d="M75.9,120.9c12.4,0,22.8-4.1,30.4-11.1L91.5,98.4c-4.1,2.8-9.4,4.4-15.6,4.4c-12,0-22.1-8.1-25.8-18.9L34.9,95.6C42.7,111.1,58.5,120.9,75.9,120.9z" fill="#34A353"/>
                  <path d="M50.1,83.8c-1.9-5.7-1.9-11.9,0-17.6L34.9,54.4c-6.5,13-6.5,28.3,0,41.2L50.1,83.8z" fill="#F6B704"/>
                  <path d="M75.9,47.3c6.5-0.1,12.9,2.4,17.6,6.9L106.6,41C98.3,33.2,87.3,29,75.9,29.1c-17.4,0-33.2,9.8-41,25.3l15.2,11.8C53.8,55.3,63.9,47.3,75.9,47.3z" fill="#E54335"/>
                </svg>
                <div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => {
                      let fillClass = 'text-gray-500';
                      if (i < 4) {
                        fillClass = 'text-yellow-400 fill-yellow-400';
                      } else if (i === 4) {
                        fillClass = 'text-yellow-400 fill-yellow-400/90';
                      }
                      return (
                        <Star
                          key={i}
                          className={`h-6 w-6 ${fillClass}`}
                        />
                      );
                    })}
                  </div>
                  <p className="text-gray-300 mt-2">4.9/5 from 1,200+ reviews</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
              
                    <svg
                      height="100%"
                      style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}
                      version="1.1"
                      viewBox="0 0 1785 448"
                      width="30%"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g transform="matrix(1,0,0,1,-358.676,7.92781)">
                        <path
                          d="M827.834,154.864L1007.91,154.864L1007.91,188.388L937.01,188.388L937.01,377.369L898.145,377.369L898.145,188.388L827.537,188.388L827.834,154.864ZM1000.2,216.275L1033.43,216.275L1033.43,247.426L1034.02,247.426C1035.21,242.976 1037.29,238.822 1040.25,234.669C1043.22,230.515 1046.78,226.659 1051.23,223.395C1055.38,219.835 1060.13,217.165 1065.47,215.088C1070.51,213.012 1075.85,211.825 1081.19,211.825C1085.35,211.825 1088.31,212.122 1089.8,212.122C1091.28,212.418 1093.06,212.715 1094.54,212.715L1094.54,246.832C1092.17,246.239 1089.5,245.942 1086.83,245.646C1084.16,245.349 1081.79,245.052 1079.12,245.052C1073.18,245.052 1067.55,246.239 1062.21,248.612C1056.87,250.986 1052.41,254.546 1048.26,258.996C1044.4,263.743 1041.14,269.379 1038.77,276.203C1036.39,283.026 1035.21,291.037 1035.21,299.937L1035.21,376.479L999.608,376.479L1000.2,216.275ZM1258.01,377.369L1222.71,377.369L1222.71,354.821L1222.11,354.821C1217.66,363.128 1211.14,369.358 1202.53,374.402C1193.93,379.445 1185.03,381.819 1176.13,381.819C1155.06,381.819 1139.64,376.775 1130.14,366.095C1120.65,355.711 1115.9,339.691 1115.9,318.627L1115.9,216.275L1151.5,216.275L1151.5,315.067C1151.5,329.308 1154.17,339.394 1159.81,345.031C1165.15,350.965 1172.87,353.931 1182.65,353.931C1190.07,353.931 1196.3,352.745 1201.35,350.371C1206.39,347.998 1210.54,345.031 1213.51,341.174C1216.77,337.318 1218.85,332.571 1220.33,327.231C1221.82,321.891 1222.41,315.957 1222.41,309.727L1222.41,216.275L1258.01,216.275L1258.01,377.369ZM1318.24,325.747C1319.42,336.131 1323.28,343.251 1330.1,347.701C1336.92,351.855 1345.23,353.931 1354.73,353.931C1357.99,353.931 1361.85,353.635 1366,353.041C1370.15,352.448 1374.31,351.558 1377.87,350.075C1381.72,348.591 1384.69,346.515 1387.06,343.548C1389.44,340.581 1390.62,337.021 1390.33,332.571C1390.03,328.121 1388.55,324.264 1385.28,321.297C1382.02,318.331 1378.16,316.254 1373.42,314.177C1368.67,312.397 1363.03,310.914 1356.8,309.727C1350.57,308.54 1344.34,307.057 1337.82,305.574C1331.29,304.09 1324.76,302.31 1318.53,300.234C1312.3,298.157 1306.96,295.487 1301.92,291.63C1297.17,288.07 1293.02,283.62 1290.35,277.983C1287.38,272.346 1285.9,265.819 1285.9,257.513C1285.9,248.612 1287.97,241.492 1292.42,235.559C1296.58,229.625 1302.21,224.878 1308.74,221.318C1315.27,217.758 1322.68,215.088 1330.69,213.605C1338.7,212.122 1346.42,211.528 1353.54,211.528C1361.85,211.528 1369.86,212.418 1377.27,214.198C1384.69,215.978 1391.81,218.648 1397.74,222.802C1403.97,226.659 1409.02,231.999 1412.87,238.229C1417.03,244.459 1419.4,252.172 1420.59,261.073L1383.5,261.073C1381.72,252.469 1377.87,246.832 1371.93,243.866C1365.7,240.899 1358.88,239.415 1350.87,239.415C1348.5,239.415 1345.23,239.712 1341.97,240.009C1338.41,240.602 1335.44,241.196 1332.18,242.382C1329.21,243.569 1326.54,245.349 1324.46,247.426C1322.39,249.502 1321.2,252.469 1321.2,256.029C1321.2,260.479 1322.68,263.743 1325.65,266.413C1328.62,269.083 1332.48,271.16 1337.52,273.236C1342.27,275.016 1347.9,276.5 1354.13,277.686C1360.36,278.873 1366.89,280.356 1373.42,281.84C1379.94,283.323 1386.17,285.103 1392.4,287.18C1398.63,289.257 1404.27,291.927 1409.02,295.783C1413.76,299.344 1417.92,303.794 1420.88,309.134C1423.85,314.474 1425.33,321.297 1425.33,329.011C1425.33,338.504 1423.26,346.515 1418.81,353.338C1414.36,359.865 1408.72,365.502 1401.9,369.655C1395.07,373.809 1387.06,376.775 1378.76,378.852C1370.15,380.632 1361.85,381.819 1353.54,381.819C1343.45,381.819 1333.96,380.632 1325.36,378.259C1316.75,375.885 1309.04,372.325 1302.81,367.875C1296.58,363.128 1291.53,357.492 1287.97,350.371C1284.41,343.548 1282.34,335.241 1282.04,325.451L1317.94,325.451L1317.94,325.747L1318.24,325.747ZM1435.42,216.275L1462.42,216.275L1462.42,167.621L1498.02,167.621L1498.02,215.978L1530.06,215.978L1530.06,242.382L1498.02,242.382L1498.02,328.418C1498.02,332.274 1498.32,335.241 1498.61,338.208C1498.91,340.878 1499.8,343.251 1500.69,345.031C1501.88,346.811 1503.66,348.295 1505.73,349.185C1508.11,350.075 1511.07,350.668 1515.23,350.668C1517.6,350.668 1520.27,350.668 1522.64,350.371C1525.02,350.075 1527.69,349.778 1530.06,349.185L1530.06,376.775C1526.2,377.369 1522.35,377.665 1518.49,377.962C1514.63,378.555 1511.07,378.555 1506.92,378.555C1497.43,378.555 1490.01,377.665 1484.37,375.885C1478.74,374.105 1474.29,371.435 1471.02,368.172C1467.76,364.612 1465.68,360.458 1464.5,355.415C1463.31,350.371 1462.71,344.141 1462.42,337.614L1462.42,242.679L1435.42,242.679L1435.42,215.682L1435.42,216.275ZM1554.98,216.275L1588.5,216.275L1588.5,238.229L1589.1,238.229C1594.14,228.735 1600.97,222.208 1609.87,218.055C1618.77,213.902 1628.26,211.825 1638.94,211.825C1651.7,211.825 1662.67,213.902 1672.17,218.648C1681.66,223.098 1689.37,229.032 1695.6,237.042C1701.83,244.756 1706.58,253.952 1709.55,264.336C1712.51,274.72 1714.29,285.993 1714.29,297.563C1714.29,308.54 1712.81,318.924 1710.14,329.011C1707.17,339.098 1703.02,348.295 1697.38,356.008C1691.75,363.722 1684.63,369.952 1675.73,374.699C1666.83,379.445 1656.74,381.819 1644.87,381.819C1639.83,381.819 1634.49,381.225 1629.44,380.335C1624.4,379.445 1619.36,377.962 1614.61,375.885C1609.87,373.809 1605.41,371.138 1601.56,367.875C1597.4,364.612 1594.14,360.755 1591.47,356.601L1590.88,356.601L1590.88,437L1555.28,437L1555.28,216.275L1554.98,216.275ZM1679.29,296.97C1679.29,289.85 1678.4,282.73 1676.32,275.906C1674.54,269.083 1671.57,263.149 1667.72,257.809C1663.86,252.469 1659.11,248.316 1653.77,245.052C1648.14,241.789 1641.61,240.305 1634.49,240.305C1619.65,240.305 1608.38,245.349 1600.67,255.733C1593.25,266.116 1589.39,280.06 1589.39,297.267C1589.39,305.574 1590.28,312.99 1592.36,319.814C1594.44,326.637 1597.11,332.571 1601.26,337.614C1605.12,342.658 1609.87,346.515 1615.5,349.481C1621.14,352.448 1627.37,353.931 1634.79,353.931C1643.09,353.931 1649.62,352.151 1655.26,348.888C1660.89,345.625 1665.34,341.174 1669.2,336.131C1672.76,330.791 1675.43,324.857 1676.91,318.034C1678.4,310.914 1679.29,304.09 1679.29,296.97ZM1741.88,154.864L1777.49,154.864L1777.49,188.388L1741.88,188.388L1741.88,154.864ZM1741.88,216.275L1777.49,216.275L1777.49,377.369L1741.88,377.369L1741.88,216.275ZM1809.23,154.864L1844.83,154.864L1844.83,377.369L1809.23,377.369L1809.23,154.864ZM1953.41,381.819C1940.66,381.819 1929.09,379.742 1919,375.292C1908.91,370.842 1900.61,365.205 1893.49,357.788C1886.66,350.371 1881.32,341.174 1877.76,330.791C1874.2,320.407 1872.12,308.837 1872.12,296.673C1872.12,284.51 1873.9,273.236 1877.76,262.853C1881.32,252.469 1886.66,243.569 1893.49,235.855C1900.31,228.439 1908.91,222.505 1919,218.352C1929.09,214.198 1940.66,211.825 1953.41,211.825C1966.17,211.825 1977.74,213.902 1987.83,218.352C1997.91,222.505 2006.22,228.439 2013.34,235.855C2020.16,243.272 2025.5,252.469 2029.06,262.853C2032.62,273.236 2034.7,284.51 2034.7,296.673C2034.7,309.134 2032.92,320.407 2029.06,330.791C2025.21,341.174 2020.16,350.075 2013.34,357.788C2006.52,365.205 1997.91,371.138 1987.83,375.292C1977.74,379.445 1966.47,381.819 1953.41,381.819ZM1953.41,353.635C1961.13,353.635 1968.25,351.855 1973.88,348.591C1979.82,345.328 1984.27,340.878 1988.12,335.538C1991.98,330.198 1994.65,323.967 1996.43,317.441C1998.21,310.617 1999.1,303.794 1999.1,296.673C1999.1,289.85 1998.21,283.026 1996.43,276.203C1994.65,269.379 1991.98,263.446 1988.12,258.106C1984.27,252.766 1979.52,248.612 1973.88,245.349C1967.95,242.086 1961.13,240.305 1953.41,240.305C1945.7,240.305 1938.58,242.086 1932.94,245.349C1927.01,248.612 1922.56,253.062 1918.7,258.106C1914.85,263.446 1912.17,269.379 1910.39,276.203C1908.62,283.026 1907.73,289.85 1907.73,296.673C1907.73,303.794 1908.62,310.617 1910.39,317.441C1912.17,324.264 1914.85,330.198 1918.7,335.538C1922.56,340.878 1927.31,345.328 1932.94,348.591C1938.88,352.151 1945.7,353.635 1953.41,353.635ZM2045.38,216.275L2072.38,216.275L2072.38,167.621L2107.98,167.621L2107.98,215.978L2140.02,215.978L2140.02,242.382L2107.98,242.382L2107.98,328.418C2107.98,332.274 2108.28,335.241 2108.57,338.208C2108.87,340.878 2109.76,343.251 2110.65,345.031C2111.84,346.811 2113.62,348.295 2115.69,349.185C2118.07,350.075 2121.03,350.668 2125.19,350.668C2127.56,350.668 2130.23,350.668 2132.6,350.371C2134.98,350.075 2137.65,349.778 2140.02,349.185L2140.02,376.775C2136.16,377.369 2132.31,377.665 2128.45,377.962C2124.59,378.555 2121.03,378.555 2116.88,378.555C2107.39,378.555 2099.97,377.665 2094.33,375.885C2088.7,374.105 2084.25,371.435 2080.98,368.172C2077.72,364.612 2075.64,360.458 2074.46,355.415C2073.27,350.371 2072.68,344.141 2072.38,337.614L2072.38,242.679L2045.38,242.679L2045.38,215.682L2045.38,216.275Z"
                      />
                    </g>
                </svg>
                <div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => {
                      let fillClass = 'text-gray-500';
                      if (i < 4) {
                        fillClass = 'text-yellow-400 fill-yellow-400';
                      } else if (i === 4) {
                        fillClass = 'text-yellow-400 fill-yellow-400/80';
                      }
                      return (
                        <Star
                          key={i}
                          className={`h-6 w-6 ${fillClass}`}
                        />
                      );
                    })}
                  </div>
                  <p className="text-gray-300 mt-2">4.8/5 from 900+ reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Projects & Testimonials Columns */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="relative group mb-4">
                <Image
                  src="/h1.jpg"
                  alt="Luxury villas project"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-pink-600 flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-pink-600 font-medium">Sarah Thompson</p>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => {
                      let fillClass = 'text-gray-500';
                      if (i < 3) {
                        fillClass = 'text-yellow-400 fill-yellow-400';
                      } else if (i === 3) {
                        fillClass = 'text-yellow-400 fill-yellow-400/90';
                      }
                      return (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${fillClass}`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm italic">
                &quot;As a first-time investor, I couldn&apos;t have asked for a better partner than WCI Capital Funding. They guided me every step of the way and found the ideal loan for my fix-and-flip project.&quot;
              </p>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="relative group mb-4">
                <Image
                  src="/h2.jpg"
                  alt="Urban lofts project"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-pink-600 flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-pink-600 font-medium">Michael Rodriguez</p>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => {
                      let fillClass = 'text-gray-500';
                      if (i < 4) {
                        fillClass = 'text-yellow-400 fill-yellow-400';
                      } else if (i === 4) {
                        fillClass = 'text-yellow-400 fill-yellow-400/50';
                      }
                      return (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${fillClass}`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm italic">
                &quot;WCI Capital Funding exceeded my expectations! Their professionalism and connections turned my new construction dream into reality - seamlessly and quickly&quot;
              </p>
            </div>

            {/* Project 3 */}

         
          </div>
        </div>

        <div className="text-center mt-12">
          
          <p className="mt-4 text-gray-300 text-sm mb-2">You like these experiences…</p>
          <Link href="/get-pre-qualified" className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-6 rounded-md text-sm transition-colors duration-300">
            Get Pre-Qualified
          </Link>
        </div>
      </div>
    </section>

    {/* 
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto">
         
          <div className="space-y-12">
          
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 text-pink-600">
                  <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">$23+ billion</h3>
                <p className="text-gray-600">
                  in loans originated to real estate investors to help them scale their businesses.
                </p>
              </div>
            </div>

            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 text-pink-600">
                  <Building2 className="h-full w-full" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">85,000+</h3>
                <p className="text-gray-600">
                  move-in ready homes and rentals funded for our customers across the country
                </p>
              </div>
            </div>
          </div>

          
          <div className="space-y-12">
           
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 text-pink-600">
                  <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">45 states + DC</h3>
                <p className="text-gray-600">
                  where we lend to real estate investors so they can revitalize neighborhoods
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 text-pink-600">
                  <BarChart3 className="h-full w-full" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
                <p className="text-gray-600">
                  of our transactions have successful exits, compared to the 75% industry average
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>*/}

    {/* 
    <section className="py-12 md:py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          See why 17,000+ real estate investors trust we connect investment to capital
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-pink-100">
              <div className="flex text-pink-500 mb-4">{"★".repeat(5)}</div>
              <p className="text-gray-600 mb-6">
                {`We connect investments to capital have been an awesome partner in helping me achieve my Real Estate investment dreams. I have
worked with other companies but they completely standout in professionalism, timeliness and flexible
rates options.`}
              </p>
              <div className="text-sm text-gray-500">
                <div className="font-semibold">Oracle F.</div>
                <div>12/01/24 via Trustpilot</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

   Testimonials Section - Improved mobile layout */}

    {/* Get Insights Section */}
    <section className="py-16 bg-pink-200">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          GET EMPOWERED WITH INDUSTRY INSIGHTS AND MORE
        </h2>
        <Link href="/blog">
          <Button 
            className="bg-pink-200 hover:bg-pink-400 text-gray-800 px-8 py-3 rounded-md transition-colors"
          >
            Read Our Blog
          </Button>
        </Link>
      </div>
    </section>

    {/* Awards/Recognition Section 
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          
          <div className="text-center">
            <Image
              src="/inc-best-workplaces.png"
              alt="2022 Best Workplaces"
              width={150}
              height={100}
              className="mb-4 mx-auto"
            />
            <h3 className="text-sm font-medium text-gray-800">2022 Best Workplaces</h3>
            <p className="text-xs text-gray-600">2022 Inc. Magazine</p>
          </div>

          
          <div className="text-center">
            <Image
              src="/inc-500.png"
              alt="500 Fastest Growing Companies"
              width={150}
              height={100}
              className="mb-4 mx-auto"
            />
            <h3 className="text-sm font-medium text-gray-800">500 Fastest Growing Companies</h3>
            <p className="text-xs text-gray-600">2021 Inc. Magazine</p>
          </div>

        
          <div className="text-center">
            <Image
              src="/tech-100.png"
              alt="2025 HousingWire Tech100 Winner"
              width={150}
              height={100}
              className="mb-4 mx-auto"
            />
            <h3 className="text-sm font-medium text-gray-800">2025 HousingWire Tech100 Winner</h3>
            <p className="text-xs text-gray-600">Winner Eight Years in a Row!</p>
          </div>

          
          <div className="text-center">
            <Image
              src="/best-loan.png"
              alt="Best Loan Origination Platform"
              width={150}
              height={100}
              className="mb-4 mx-auto"
            />
            <h3 className="text-sm font-medium text-gray-800">Best Loan Origination Platform</h3>
            <p className="text-xs text-gray-600">2021 Fintech Breakthrough Award</p>
          </div>

          
          <div className="text-center">
            <Image
              src="/forbes-fintech.png"
              alt="Forbes Fintech 50"
              width={150}
              height={100}
              className="mb-4 mx-auto"
            />
            <h3 className="text-sm font-medium text-gray-800">Forbes Fintech 50</h3>
            <p className="text-xs text-gray-600">2019 Forbes Fintech 50</p>
          </div>
        </div>
      </div>
    </section>*/}

     {/* Disclaimer Section*/}
     <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-xs text-gray-500">
            DISCLAIMER: All loan rates relate to non-owner-occupied rental properties only and are based on lender disposition, loan terms, borrower qualifications, LTV, and property factors. All loan rates are subject to change. Interest rates or charges herein are not recommended, approved, set or established by states. Loans are available in all states, except CA, OR, NV, AZ, UT, ID, ND, SD, MN, NC, NJ, NY and VT.
            **Exceptions may apply.
          </p>
        </div>
      </div> 

    </div>
  )
}

