import React, { useEffect, useState } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const Scheduler = () => {
  const [, setScheduleObj] = useState();

  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };

  useEffect(() => {

    
  }, [])

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Calendar" />
      <ScheduleComponent
        height="650px"
        ref={(schedule) => setScheduleObj(schedule)}
        eventSettings={{ dataSource: scheduleData }}
        dragStart={onDragStart}

      >
        <ViewsDirective>
          { ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => <ViewDirective key={item} option={item} />)}
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  );
};

export default Scheduler;
