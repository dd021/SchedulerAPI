using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SchedulerAPI.Models
{
    public class Schedule
    {
        public int Id { get; set; }//primary key for schedule table

        public string Title { get; set; } //schedue title

        public string Details { get; set; }//schedule detils

        public string Status { get; set; }//schedule status
    }
}
