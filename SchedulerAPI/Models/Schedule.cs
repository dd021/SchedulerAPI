using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SchedulerAPI.Models
{
    public class Schedule
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Details { get; set; }

        public string Status { get; set; }
    }
}
