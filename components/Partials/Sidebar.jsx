import React from 'react';
import Link from 'next/link';


const Sidebar = () => {
    return (
        <>
            <input type="checkbox" id="sidebar-toggle" />
            <div className="sidebar">
                <div className="sidebar-header">
                <h3 className="brand">
                    <span className="ti-unlink" />
                    <span>Ozonr Shope</span>
                </h3>
                <label htmlFor="sidebar-toggle" className="ti-menu-alt" />
                </div>
                {/* Sidebar */}
                <div className="sidebar-menu">
                <ul>
                        <li>
                            <Link href="/admin  ">
                                <a >
                                    <span className="ti-home"></span>
                                    <span>ຫນ້າຫລັກ</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Custorder">
                                <a >
                                    <span className="ti-view-list"></span>
                                    <span>ລາຍການສັ່ງຊື້ລູກຄ້າ</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Myproducts">
                                <a >
                                    <span className="ti-server"></span>
                                    <span>ສິນຄ້າໃນສ່າງ</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Categories">
                                <a >
                                    <span className="ti-clipboard"></span>
                                    <span>ປະເພດສິນຄ້າ</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Brands">
                                <a>
                                    <span className="ti-folder"></span>
                                    <span>ແບຣນສິນຄ້າ</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <a href="">
                                    <span className="ti-layout-grid2"></span>
                                    <span>ລາຍການຫມວດສິນຄ້າ</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Bank">
                                <a >
                                    <span className="ti-wallet"></span>
                                    <span>ຂໍ້ມູນການຊຳລະ</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Sale">
                                <a >
                                    <span className="ti-stats-up"></span>
                                    <span>ຂໍ້ມູນການຂ່າຍອອກສິນຄ້າ</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Profile">
                                <a >
                                    <span className="ti-settings"></span>
                                    <span>ຂໍ້ມູນຜູ້ໃຊ້</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;
