import { ChangeDetectionStrategy, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Customers, Contacts } from 'src/app/features/main/model/customer.model';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { SearchStoreService } from '../../../customers-main/store/search-store.service';
import { ContactsStoreService } from '../../../customers-main/store/contacts-store.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { ViewportScroller } from '@angular/common';
import { OffsetTopDirective } from 'src/app/features/main/directives/offset-top.directive';
import { ScrollableDirective } from 'src/app/features/main/directives/scrollable.directive';

@Component({
  selector: 'app-contacts-tree',
  templateUrl: './contacts-tree.component.html',
  styleUrls: ['./contacts-tree.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsTreeComponent implements OnInit {
  treeControl = new NestedTreeControl<Customers>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Customers>();

  hasChild = (_: number, node: Customers) => !!node.children && node.children.length > 0;

  @ViewChild('treeview', { static: false }) treeview!: ElementRef;

  constructor(private readonly storeSearch: SearchStoreService,
    private readonly contactStore: ContactsStoreService,
    private scroller: ViewportScroller) { }

  ngOnInit(): void {
    this.storeSearch.results$.subscribe((event: Contacts[]) => {
      if(event){
        this.storeSearch.loadContacts(event);
      }
    });

    this.storeSearch.custContacts$.subscribe((event: Customers[]) => {
      this.dataSource.data = event;
      console.log("dataSource: ", this.dataSource.data);
      console.log("event: ", event);
    })
  }

  selectedNodes: any = [];

  /*************SELECT AREA************** */
  onSelectContact(node: any) {    
    this.selectedNodes = [];
    
    this.dataSource.data.forEach((item: any) => {
      item.isActive = false;            

      this.setSelectedsNodes(item);

      console.log("parent item: ", item);

      if(item.children?.length) {
        this.setChildren(item.children);
      }
    });

    if(this.selectedNodes.length <= 1){
      if(this.selectedNodes.length === 0){
        node.isActive = true;      
      }else{
        node.isActive = !node.isActive;
      }
      
    }    

    this.setSelectedsNodes(node);

    console.log("dataSource: ", this.dataSource);
    console.log("selectedNodes: ", this.selectedNodes);
  }

  setChildren(item: any){
    console.log("clild item: ", item);
    for(let i=0; i<item?.length!; i++){      
      item[i].isActive = false;  

      this.setSelectedsNodes(item[i]);

      if(item[i].children?.length) {
        this.setChildren(item[i].children);
      }      
    }
  }

  onSelectMultiContacts(node: any) {
    node.isActive = !node.isActive;

    this.setSelectedsNodes(node);
    console.log("selectedNodes: ", this.selectedNodes);
  }

  setSelectedsNodes(node: any) {
    const index = this.selectedNodes?.indexOf(node);
    
    if(node.isActive) {
      if(index === -1) {
        this.selectedNodes.push(node);
      }      
    }else{
      this.selectedNodes.splice(index, 1);
    }
  }

  /*************END SELECT AREA************** */

  /*************SEARCH AREA************** */
  searchNode(id: string) {
    this.dataSource.data.forEach((item: Customers) => {
      // console.log("search node: ", item);
      
      if(item.id === id) {
        this.treeControl.expand(item);
        
        const nodeOffset: any = document.getElementById('node'+id);
          
        nodeOffset.scrollIntoView(true);
        window.scrollTo(0, 0);
      }else if(item.children?.length) {
        this.searchNodeInChild(id, item.children, item);
      }
    });
  }

  searchNodeInChild(id: string, node: any, parent: any){
    for(let i=0; i<node?.length!; i++){
      if(node[i].id === id) {
        this.expand(this.dataSource.data, id);
        
        const scrollyDiv: any = document.getElementById('tree-block');
        console.log("offset tree-block: ", scrollyDiv.offsetTop);
        const treeContainer: any = document.getElementById('tree-container');

        var topPos = treeContainer.getBoundingClientRect().top;

        
        
        console.log("offset tree-block: ", treeContainer.offsetTop);
        // console.log("offset tree-block: ", scrollyDiv.getb);
        // scrollyDiv.scrollTop = scrollyDiv.scrollHeight;

        // console.log("scrollyDiv.scrollTop: ", scrollyDiv.scrollTop);
        
        setTimeout(() => {

          const nodeOffset: any = document.getElementById('node'+id);
          var topNode = nodeOffset.getBoundingClientRect().top;

          // scrollyDiv.scrollTop = topNode - topPos;

          
          nodeOffset.scrollIntoView(true);
          window.scrollTo(0, 0);
          

          // console.log("scrollTop: ", scrollyDiv.scrollTop);

          // const anchor = document.createElement('a');
          // nodeOffset.Add(anchor);
          // var objectUrl = "#" + 'node' + id;
          // anchor.href = objectUrl;
          // anchor.click();

          // debugger;

        //   var textnode = document.createElement("P");
        //   textnode.innerHTML = "";
        //   scrollyDiv.appendChild(textnode);  
        //   scrollyDiv.scrollTop = scrollyDiv.scrollHeight;
        //   console.log("scrollyDiv.scrollTop: ", scrollyDiv.scrollTop);

          // console.log(document.getElementById('node'+id)?.offsetHeight);
        //   scrollyDiv.querySelector('.node'+id).scrollIntoView({
        //     behavior: 'smooth'
        // });
          // scrollyDiv.scroll({
          //   top: 94, //document.getElementById(id)?.offsetHeight,
          //   behavior: 'smooth'
          // });
          // scrollyDiv.scrollTop = topNode - topPos;

          // console.log("scrollyDiv.scrollTop: ", scrollyDiv.scrollTop);
          
          
          
        });
        
        
        return;
      }

      if(node[i].children?.length) {
        this.searchNodeInChild(id, node[i].children, parent);
      }  
    }

  }

  expand(data: Customers[], uniqueId: string): any {
    data.forEach(node => {
      if (node.children && node.children.find(c => c.id === uniqueId)) {
        this.treeControl.expand(node);
        this.expand(this.dataSource.data, node.id);
      }
      else if (node.children && node.children.find(c => c.children)) {
        this.expand(node.children, uniqueId);
      }
    });
  }


  /*************END SEARCH AREA************** */

  searchNode_temp(id: string) {
    this.dataSource.data.forEach((item: Customers) => {
      debugger;
      if(item.id === id) { //2-2-1
        this.treeControl.collapseAll();
        // this.expand(this.dataSource.data, item.id);
        this.treeControl.expand(item);
        this.expand(this.dataSource.data, item.id);
      }
      // if(item.children?.length) {
        // this.setChildren(item.children[0], id);
      // }
    });
  }

  


  ////////////////////////////

  /**
   * Recursively expand all parents of the passed node.
   */
  expandParents(node: Customers) {
    const parent = this.getParent(node);

    debugger;
    this.treeControl.expand(parent!);

    if (parent && parent.id) {
      this.expandParents(parent);
    }
  }

  /**
   * Iterate over each node in reverse order and return the first node that has a lower level than the passed node.
   */
  getParent(node: Customers) {
    const { treeControl } = this;
    // debugger;
    // const tmp = this.treeControl.getLevel(node);

    // console.log("tmp: ", tmp);
    
    const currentLevel = treeControl?.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = treeControl.dataNodes[i];

      if (treeControl.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }

    return node;
  }
}


