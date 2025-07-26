import React from 'react';
import styles from './CohortDetails.module.css';
import { CohortsData } from './Cohort';

const CohortDetails = () => {
  return (
    <div>
      <h2>Cohorts Details</h2>
      {CohortsData.map((cohort, index) => {
        const isOngoing = cohort.currentStatus.toLowerCase() === 'ongoing';

        return (
          <div key={index} className={styles.box}>
            <h3 style={{ color: isOngoing ? 'green' : 'blue' }}>
              {cohort.cohortCode} - {cohort.technology}
            </h3>
            <dl>
              <dt>Started On</dt>
              <dd>{cohort.startDate}</dd>
              <dt>Current Status</dt>
              <dd>{cohort.currentStatus}</dd>
              <dt>Coach</dt>
              <dd>{cohort.coachName}</dd>
              <dt>Trainer</dt>
              <dd>{cohort.trainerName}</dd>
            </dl>
          </div>
        );
      })}
    </div>
  );
};

export default CohortDetails;
