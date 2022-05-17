class MockDataService {
  static getBusStop(id) {
    switch (id) {
      case 'RA63': {
        return {
          id: 'RA63',
          name: 'Jubilee Campus, The Exchange',
          lng: -1.187562,
          lat: 52.954018,
        };
      }

      case 'UN32': {
        return {
          id: 'UN32',
          name: 'University Park, Library Road',
          lng: -1.1960603,
          lat: 52.9389273,
        };
      }

      case 'UN31': {
        return {
          id: 'UN32',
          name: 'University Park, George Green Library',
          lng: -1.1939413,
          lat: 52.9407377,
        };
      }

      case 'LE01': {
        return {
          id: 'LE01',
          name: 'Hillside',
          lng: -1.1859985,
          lat: 52.9473615,
        };
      }

      default: {
        return {
          id: 'RA63',
          name: 'Jubilee Campus, The Exchange',
          lng: -1.187562,
          lat: 52.954018,
        };
      }
    }
  }

  static getTimetable(id) {
    switch (id) {
      case 'RA63': {
        return [
          { busId: '1230', busLine: '31', arrivalTime: '21:30', destination: 'Victoria Centre', color: '#DA487E' },
          { busId: '1231', busLine: '903', arrivalTime: '21:45', destination: 'University Park', color: '#18194f' },
          { busId: '1232', busLine: '31', arrivalTime: '21:30', destination: 'Victoria Centre', color: '#DA487E' },

          { busId: '1233', busLine: '903', arrivalTime: '21:45', destination: 'University Park', color: '#18194f' },
          { busId: '1234', busLine: '31', arrivalTime: '21:30', destination: 'Victoria Centre', color: '#DA487E' },
          { busId: '1235', busLine: '903', arrivalTime: '21:45', destination: 'University Park', color: '#18194f' },
        ];
      }

      case 'UN32': {
        return [
          { busId: '1240', busLine: '903', arrivalTime: '21:45', destination: 'Jubilee Campus', color: '#18194f' },
          { busId: '1241', busLine: '903', arrivalTime: '21:45', destination: 'Jubilee Campus', color: '#18194f' },
          { busId: '1242', busLine: '903', arrivalTime: '21:45', destination: 'Jubilee Campus', color: '#18194f' },
          { busId: '1243', busLine: '903', arrivalTime: '21:45', destination: 'Jubilee Campus', color: '#18194f' },
          { busId: '1244', busLine: '903', arrivalTime: '21:45', destination: 'Jubilee Campus', color: '#18194f' },
        ];
      }

      case 'UN31': {
        return [
          { busId: '1240', busLine: '903', arrivalTime: '21:45', destination: 'University Park', color: '#18194f' },
          { busId: '1241', busLine: '34', arrivalTime: '22:00', destination: 'City Loop', color: '#E37222' },
          { busId: '1242', busLine: '903', arrivalTime: '21:45', destination: 'University Park', color: '#18194f' },
          { busId: '1243', busLine: '34', arrivalTime: '22:00', destination: 'City Loop', color: '#E37222' },
          { busId: '1240', busLine: '902', arrivalTime: '21:45', destination: 'Kings Meadow', color: '#18194f' },
          { busId: '1244', busLine: '903', arrivalTime: '21:45', destination: 'University Park', color: '#18194f' },
          { busId: '1245', busLine: '34', arrivalTime: '22:00', destination: 'City Loop', color: '#E37222' },
          { busId: '1246', busLine: '903', arrivalTime: '21:45', destination: 'University Park', color: '#18194f' },
          {
            busId: '1240',
            busLine: '904',
            arrivalTime: '21:45',
            destination: 'Royal Derby Hospital',
            color: '#18194f',
          },
          { busId: '1247', busLine: '34', arrivalTime: '22:00', destination: 'City Loop', color: '#E37222' },
          { busId: '1240', busLine: '901', arrivalTime: '21:45', destination: 'Sutton Bonnington', color: '#18194f' },
        ];
      }

      case 'LE01': {
        return [
          { busId: '1240', busLine: '903', arrivalTime: '21:45', destination: 'University Park', color: '#18194f' },
          { busId: '1241', busLine: '34', arrivalTime: '22:00', destination: 'City Loop', color: '#E37222' },
          { busId: '4546', busLine: '35', arrivalTime: '22:00', destination: 'Victoria Centre', color: '#E37222' },
          { busId: '7954', busLine: '36', arrivalTime: '22:00', destination: 'Victoria Centre', color: '#E37222' },
          { busId: '3156', busLine: 'L12', arrivalTime: '22:00', destination: 'City Hospital', color: '#00502D' },
          { busId: '6445', busLine: '903', arrivalTime: '21:45', destination: 'University Park', color: '#18194f' },
          { busId: '9874', busLine: '34', arrivalTime: '22:00', destination: 'City Loop', color: '#E37222' },
          { busId: '2315', busLine: '35', arrivalTime: '22:00', destination: 'Victoria Centre', color: '#E37222' },
          { busId: '6548', busLine: '903', arrivalTime: '21:45', destination: 'University Park', color: '#18194f' },
          { busId: '5656', busLine: '36', arrivalTime: '22:00', destination: 'Victoria Centre', color: '#E37222' },
          { busId: '7777', busLine: '903', arrivalTime: '21:45', destination: 'University Park', color: '#18194f' },
          {
            busId: '1241',
            busLine: 'L2',
            arrivalTime: '22:00',
            destination: 'Nottingham Business Park',
            color: '#00502D',
          },
          { busId: '1241', busLine: 'L5', arrivalTime: '22:00', destination: 'Castle Marina', color: '#00502D' },
          { busId: '1242', busLine: '902', arrivalTime: '22:00', destination: 'University Park', color: '#18194f' },
          { busId: '3134', busLine: '35', arrivalTime: '22:00', destination: 'Victoria Centre', color: '#E37222' },
          { busId: '5676', busLine: '36', arrivalTime: '22:00', destination: 'Victoria Centre', color: '#E37222' },
        ];
      }

      default: {
        return [
          { busId: '1230', busLine: '31', arrivalTime: '21:30', destination: 'Victoria Centre', color: '#DA487E' },
          { busId: '1231', busLine: '903', arrivalTime: '21:45', destination: 'University Park', color: '#18194f' },
          { busId: '1232', busLine: '31', arrivalTime: '21:30', destination: 'Victoria Centre', color: '#DA487E' },
          { busId: '1233', busLine: '903', arrivalTime: '21:45', destination: 'University Park', color: '#18194f' },
          { busId: '1234', busLine: '31', arrivalTime: '21:30', destination: 'Victoria Centre', color: '#DA487E' },
          { busId: '1235', busLine: '903', arrivalTime: '21:45', destination: 'University Park', color: '#18194f' },
        ];
      }
    }
  }

  static getBusStops() {
    return [
      { name: 'University Park, Library Road', id: 'UN32', buses: [{ busLine: '903', color: '#18194f' }] },
      {
        name: 'University Park, George Green Library',
        id: 'UN31',
        buses: [
          { busLine: '901', color: '#18194f', type: 'BUS' },
          { busLine: '902', color: '#18194f', type: 'BUS' },
          { busLine: '903', color: '#18194f', type: 'BUS' },
          { busLine: '904', color: '#18194f', type: 'BUS' },
          { busLine: '34', color: '#E37222', type: 'BUS' },
        ],
      },
      {
        name: 'Jubilee Campus, The Exchange',
        id: 'RA63',
        buses: [
          { busLine: '903', color: '#18194f', type: 'BUS' },
          { busLine: '31', color: '#DA487E', type: 'BUS' },
        ],
      },
      {
        name: 'Hillside',
        id: 'LE01',
        buses: [
          { busLine: '903', color: '#18194f', type: 'BUS' },
          { busLine: '902', color: '#18194f', type: 'BUS' },
          { busLine: '34', color: '#E37222', type: 'BUS' },
          { busLine: '35', color: '#E37222', type: 'BUS' },
          { busLine: '36', color: '#E37222', type: 'BUS' },
          { busLine: 'L2', color: '#00502D', type: 'BUS' },
          { busLine: 'L5', color: '#00502D', type: 'BUS' },
          { busLine: 'L12', color: '#00502D', type: 'BUS' },
        ],
      },
      {
        name: 'University of Nottingham',
        id: 'UN',
        buses: [{ busLine: 'NET', color: '#3FB565', type: 'TRAM' }],
      },
      {
        name: 'Nottingham Station',
        id: 'NS',
        buses: [
          { busLine: 'NET', color: '#3FB565', type: 'TRAM' },
          { busLine: 'NET', color: '#543C93', type: 'TRAM' },
          { busLine: 'XC', color: '#880038', type: 'TRAIN' },
          { busLine: 'EMR', color: '#4C2F48', type: 'TRAIN' },
          { busLine: 'N', color: '#262262', type: 'TRAIN' },
          { busLine: '33', color: '#70CDF4', type: 'BUS' },
          { busLine: '33X', color: '#70CDF4', type: 'BUS' },
          { busLine: '90', color: '#FF0000', type: 'BUS' },
          { busLine: '90A', color: '#FF0000', type: 'BUS' },
          { busLine: '6', color: '#007A4D', type: 'BUS' },
          { busLine: '10', color: '#007A4D', type: 'BUS' },
          { busLine: '1', color: '#002663', type: 'BUS' },
          { busLine: '1B', color: '#002663', type: 'BUS' },
          { busLine: '9', color: '#007A4D', type: 'BUS' },
          { busLine: '48X', color: '#002663', type: 'BUS' },
          { busLine: '49X', color: '#002663', type: 'BUS' },
          { busLine: 'L1', color: '#00502D', type: 'BUS' },
          { busLine: 'Key', color: '#A00164', type: 'BUS' },
        ],
      },
    ];
  }

  static getNavigationOptions() {
    return [
      {
        duration: 60 * 25,
        steps: [
          {
            mode: 'WALK',
            depart: 'Portaland Building',
            arrive: 'University Park, Library Road',
            duration: 60 * 5,
          },
          {
            mode: 'BUS',
            line: '903',
            color: '#18194f',
            depart: 'University Park, Library Road',
            arrive: 'Jubilee Campus, Exchange Building',
            duration: 60 * 20,
          },
        ],
      },
      {
        duration: 60 * 25,
        steps: [
          {
            mode: 'WALK',
            depart: 'Portaland Building',
            arrive: 'University Park, Library Road',
            duration: 60 * 5,
          },
          {
            mode: 'BUS',
            line: '34',
            color: '#E37222',
            depart: 'University Park, East Drive',
            arrive: 'Hillside',
            duration: 60 * 15,
          },
          {
            mode: 'WALK',
            depart: 'Hillside',
            arrive: 'Jubilee Campus, Exchange Building',
            duration: 60 * 10,
          },
        ],
      },
      {
        duration: 60 * 35,
        steps: [
          {
            mode: 'WALK',
            depart: 'Portland Building',
            arrive: 'Jubilee Campus, Exchange Building',
            duration: 60 * 35,
          },
        ],
      },
      {
        duration: 60 * 15,
        steps: [
          {
            mode: 'BICYCLE',
            depart: 'Portland Building',
            arrive: 'Jubilee Campus, Exchange Building',
            duration: 60 * 15,
          },
        ],
      },
    ];
  }
}

export default MockDataService;
