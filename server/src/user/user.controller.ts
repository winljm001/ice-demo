import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  index() {
    return [
      {
        path: '/seller',
        title: '商家平台',
        url: [
          '//ice.alicdn.com/icestark/child-seller-react/index.js',
          '//ice.alicdn.com/icestark/child-seller-react/index.css',
        ],
      },
    ];
  }
}
