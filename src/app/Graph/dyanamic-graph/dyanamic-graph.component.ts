import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { DynamicContent } from 'src/app/DynamicContent.module';


@Component({
  selector: 'app-dyanamic-graph',
  templateUrl: './dyanamic-graph.component.html',
  styleUrls: ['./dyanamic-graph.component.css']
})
export class DyanamicGraphComponent implements OnInit {
  @ViewChild('one', { static: false }) d1: ElementRef;

  constructor(private renderer: Renderer2) {

  }

  dynamicArray: Array<DynamicContent> = [];

  ngAfterViewInit() {

  }

  module123: any;


  newDynamic: any = {};
  dynamicArrayMain: Array<DynamicContent> = [];

  arrayJson = [
    {
      'dataParentId': 'root',
      'dataNodeId': '1',
      'blockName': 'Main menu',
      'dataChildId': 'null',
      'dataChild': [

      ]
    },
    {
      'dataParentId': 'root',
      'dataNodeId': '2',
      'blockName': 'Add to cart',
      'dataChildId': 'aaaa1111',
      'dataChild': [
        {
          'dataParentId': 'aaaa1111',
          'dataNodeId': '2-1',
          'blockName': 'Summery',
          'dataChildId': 'aaaa2222',
          'dataChild': [
            {
              'dataParentId': 'aaaa2222',
              'dataNodeId': '2-1-1',
              'blockName': 'Shipping info',
              'dataChildId':
                'aaaa3333',
              // 'null',
              'dataChild': [
                {
                  'dataParentId': 'aaaa3333',
                  'dataNodeId': '2-1-1-1',
                  'blockName': 'confirm shipping',
                  'dataChildId': 'aaaa4444',
                  'dataChild': [
                    {
                      'dataParentId': 'aaaa4444',
                      'dataNodeId': '2-1-1-1-1',
                      'blockName': 'confirm shipping list',
                      'dataChildId': 'null',
                      'dataChild': []

                    },
                    {
                      'dataParentId': 'aaaa4444',
                      'dataNodeId': '2-1-1-1-2',
                      'blockName': 'confirm shipping list',
                      'dataChildId': 'null',
                      'dataChild': []

                    },

                  ]
                },
                {
                  'dataParentId': 'aaaa33333',
                  'dataNodeId': '2-1-1-2',
                  'blockName': 'reset shiping info',
                  'dataChildId': 'null',
                  'dataChild': [

                  ]
                }
              ]
            },
            {
              'dataParentId': 'aaaa2222',
              'dataNodeId': '2-1-2',
              'blockName': 'confirm shipping list',
              'dataChildId': 'null',
              'dataChild': [
              ]
            }
          ]
        },
        {
          'dataParentId': 'aaaa1111',
          'dataNodeId': '2-2',
          'blockName': 'start again',
          'dataChildId': 'null',
          'dataChild': [

          ]
        }
      ]
    },
    {
      'dataParentId': 'root',
      'dataNodeId': '3',
      'blockName': 'Main menu',
      'dataChildId': 'null',
      'dataChild': [

      ]
    }
    // ,
    // {
    //   'dataParentId': 'root',
    //   'blockName': 'Main menu',
    //   'dataChildId': 'null',
    //   'dataChild': [

    //   ]
    // },
    // {
    //   'dataParentId': 'root',
    //   'blockName': 'Main menu',
    //   'dataChildId': 'null',
    //   'dataChild': [

    //   ]
    // },
    // {
    //   'dataParentId': 'root',
    //   'blockName': 'Main menu',
    //   'dataChildId': 'null',
    //   'dataChild': [

    //   ]
    // },

  ];

  ngOnInit(): void {
  }

  addModule(nodeId, parentId) {
    // this.newDynamic = { Message: };
    // this.dynamicArray.push(this.newDynamic);
    console.log(parentId);
    this.newDynamic = {
      dataParentId: parentId + '1',
      dataNodeId: this.createDynamicId(),
      blockName: '123dasgafdsa',
      dataChildId: null,
      dataChild: []
    };
    console.log(parentId);
    this.traverse(nodeId, this.arrayJson, parentId, this.newDynamic, 'add');
    console.log('Doneeeeeeeeee');
  }

  deleteModule(nodeId, parentId) {
    this.newDynamic = {};
    console.log(parentId);
    this.traverse(nodeId, this.arrayJson, parentId, this.newDynamic, 'delete');
    console.log('Deleteeeeeeeeeee');
  }

  traverse(nodeId, array, parentId, newDynamicT: any = {}, adddelete) {
    for (var p of array) {
      console.log(nodeId);
      if (adddelete == 'deletenode') {
        p.dataChild.push(newDynamicT);
        return 1;
      }
      if (p.dataParentId == parentId && p.dataNodeId == nodeId && adddelete == 'add') {
        p.dataChild.push(newDynamicT);
        console.log(p.dataChild.length);
        return 1;
      } if (p.dataParentId == parentId && p.dataNodeId == nodeId && adddelete == 'delete') {
        // p.dataChild.pop();
        adddelete = 'deletenode';
        console.log(p.dataChild.length);
        return 10;
      } else {
        var flag = this.traverse(nodeId, p.dataChild, parentId, newDynamicT, adddelete);
        if (flag == 10) {
          var i = 0;
          for (var q of p.dataChild) {

            if (q.dataNodeId == nodeId)
              break;
            i++;
          }
          p.dataChild.splice(i, 1);

        }
      }
    }
    return 0;
  }

  createDynamicId() {
    var today = new Date();
    var date = today.getFullYear() + 'y' + (today.getMonth() + 1) + 'm' + today.getDate();
    var time = today.getHours() + "h" + today.getMinutes() + "s" + today.getSeconds() + today.getMilliseconds();
    var id = 'id' + date + time;
    return id
  }

  addModuleMain(index) {

  }

}
