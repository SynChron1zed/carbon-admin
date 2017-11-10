import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';




/*
*        <div className={styles.entryBody} id="bodyTable4"  >
 <p>电石生产过程</p>

 <Table  pagination={false} bordered={true}  columns={columns3} dataSource={dataSource3} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

 </div>

 <div className={styles.entryBody} id="bodyTable5"  >
 <p>己二酸生产过程</p>

 <Table  pagination={false} bordered={true}  columns={columns4} dataSource={dataSource4} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

 </div>

 <div className={styles.entryBody} id="bodyTable6"  >
 <p>石灰生产过程</p>

 <Table  pagination={false} bordered={true}  columns={columns5} dataSource={dataSource5} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

 </div>

 <div className={styles.entryBody} id="bodyTable7"  >
 <p>硝酸生产过程</p>

 <Table  pagination={false} bordered={true}  columns={columns6} dataSource={dataSource6} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

 </div>
 */

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

