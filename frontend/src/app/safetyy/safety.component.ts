import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-save',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.css']
})
export class SafetyComponent {
  safetyRules = [
    {
      title: 'Wear Helmet',
      rules: [
        'Two Wheeler riders must wear helmet (protective headgear) while driving.',
        'The primary goal of a helmet is to protect the rider’s head during impact.',
        'Always use a standard ISI helmet.',
        'Helmets must be fastened securely.'
      ]
    },
    {
      title: 'Fasten Seat Belts',
      rules: [
        'Fasten your seat belt before you start driving.',
        'Seat belt keeps you behind the wheel and in control of the vehicle in case of a collision.',
        'Keeps your head and body from hitting inside the vehicle.',
        'Keeps you inside the vehicle during a collision.'
      ]
    },
    {
      title: 'Left Turn',
      rules: [
        'Ensure that the turning path is clear.',
        'Give left-hand signal or use indicator.',
        'Keep as close to the left as possible.',
        'Merge smoothly after completing the turn.'
      ]
    },
    {
      title: 'Right Turn',
      rules: [
        'Make sure traffic behind is at a safe distance.',
        'Give right-hand signal and slow down.',
        'Take a position on the right side of the road (in one-way roads).',
        'Turn swiftly but safely when safe to do so.'
      ]
    },
    {
      title: 'Roundabouts',
      rules: [
        'Signal before entering the roundabout.',
        'Indicate when you are about to exit.',
        'Give way to vehicles already in the roundabout.',
        'Avoid sudden lane changes inside the roundabout.'
      ]
    },
    {
      title: 'Keep Left',
      rules: [
        'Drive as close to the left-hand side of the road as possible.',
        'Allow traffic to pass on your right-hand side.'
      ]
    },
    {
      title: 'Passing & Overtaking',
      rules: [
        'Pass vehicles on the right except where the vehicle ahead is turning right.',
        'Do not overtake in no-overtaking zones.',
        'Do not obstruct vehicles trying to overtake you.',
        'Pass to the left only when it is safe and allowed.'
      ]
    },
    {
      title: 'Road Junctions',
      rules: [
        'Slow down at intersections without signals.',
        'Give way to vehicles on the main road.',
        'Give way to vehicles approaching from your right.',
        'Do not block intersections.'
      ]
    },
    {
      title: 'Emergency Vehicles',
      rules: [
        'Allow free passage to fire service vehicles and ambulances.',
        'Draw to the side of the road to let them pass.'
      ]
    },
    {
      title: 'Parking Rules',
      rules: [
        'Never park where traffic is flowing.',
        'Do not block sidewalks, entrances, or pedestrian crossings.',
        'Do not park near intersections or roundabouts.',
        'Always park on the left side in the direction of traffic.',
        'Use handbrake after parking.'
      ]
    },
    {
      title: 'Traffic Signs & Signals',
      rules: [
        'Always obey police officers, traffic signs, and signals.',
        'Stop before the line at stop signals.',
        'Follow lane markings and change lanes only after signaling.'
      ]
    },
    {
      title: 'Use of Horn',
      rules: [
        'Do not sound the horn needlessly.',
        'Avoid using the horn in silence zones.'
      ]
    },
    {
      title: 'Safe Distance',
      rules: [
        'Maintain a safe distance from the vehicle ahead.',
        'Avoid abrupt braking unless necessary for safety.'
      ]
    },
    {
      title: 'Hilly Roads',
      rules: [
        'Give way to vehicles going uphill.',
        'Stop to the side if the road is too narrow.'
      ]
    },
    {
      title: 'Speed Restrictions',
      rules: [
        'Drive at reduced speed near pedestrians, troops, or road work.',
        'Follow the posted speed limits at all times.'
      ]
    },
    {
      title: 'Obstructions & Loads',
      rules: [
        'Do not obstruct the driver’s view or control.',
        'Do not overload the vehicle.',
        'Do not carry dangerous substances unless authorized.'
      ]
    },
    {
      title: 'Reverse Driving',
      rules: [
        'Check surroundings before reversing.',
        'Do not reverse for a long distance unless necessary.'
      ]
    },
    {
      title: 'Documents to Carry',
      rules: [
        'Always carry your driving license, vehicle registration, tax certificate, and insurance.',
        'Produce documents when requested by an authorized officer.'
      ]
    },
    {
      title: 'No Drunk & Drive',
      rules: [
        'Never drive under the influence of alcohol or drugs.',
        'Alcohol impairs your reaction time and judgment.',
        'Use a designated driver or cab service if you have been drinking.',
        'Strict penalties apply for drunk driving under traffic laws.'
      ]
    }
  ];

}
