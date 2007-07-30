/*
 * Ext JS Library 1.1 Beta 2
 * Copyright(c) 2006-2007, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://www.extjs.com/license
 */


Ext.tree.TreePanel=function(el,_2){Ext.apply(this,_2);Ext.tree.TreePanel.superclass.constructor.call(this);this.el=Ext.get(el);this.el.addClass("x-tree");this.id=this.el.id;this.addEvents({"beforeload":true,"load":true,"textchange":true,"beforeexpand":true,"beforecollapse":true,"expand":true,"disabledchange":true,"collapse":true,"beforeclick":true,"checkchange":true,"click":true,"dblclick":true,"contextmenu":true,"beforechildrenrendered":true,"startdrag":true,"enddrag":true,"dragdrop":true,"beforenodedrop":true,"nodedrop":true,"nodedragover":true});if(this.singleExpand){this.on("beforeexpand",this.restrictExpand,this);}};Ext.extend(Ext.tree.TreePanel,Ext.data.Tree,{rootVisible:true,animate:Ext.enableFx,lines:true,enableDD:false,hlDrop:Ext.enableFx,restrictExpand:function(_3){var p=_3.parentNode;if(p){if(p.expandedChild&&p.expandedChild.parentNode==p){p.expandedChild.collapse();}p.expandedChild=_3;}},setRootNode:function(_5){Ext.tree.TreePanel.superclass.setRootNode.call(this,_5);if(!this.rootVisible){_5.ui=new Ext.tree.RootTreeNodeUI(_5);}return _5;},getEl:function(){return this.el;},getLoader:function(){return this.loader;},expandAll:function(){this.root.expand(true);},collapseAll:function(){this.root.collapse(true);},getSelectionModel:function(){if(!this.selModel){this.selModel=new Ext.tree.DefaultSelectionModel();}return this.selModel;},getChecked:function(a,_7){_7=_7||this.root;var r=[];var f=function(){if(this.attributes.checked){r.push(!a?this:(a=="id"?this.id:this.attributes[a]));}};_7.cascade(f);return r;},expandPath:function(_a,_b,_c){_b=_b||"id";var _d=_a.split(this.pathSeparator);var _e=this.root;if(_e.attributes[_b]!=_d[1]){if(_c){_c(false,null);}return;}var _f=1;var f=function(){if(++_f==_d.length){if(_c){_c(true,_e);}return;}var c=_e.findChild(_b,_d[_f]);if(!c){if(_c){_c(false,_e);}return;}_e=c;c.expand(false,false,f);};_e.expand(false,false,f);},selectPath:function(_12,_13,_14){_13=_13||"id";var _15=_12.split(this.pathSeparator);var v=_15.pop();if(_15.length>0){var f=function(_18,_19){if(_18&&_19){var n=_19.findChild(_13,v);if(n){n.select();if(_14){_14(true,n);}}}else{if(_14){_14(false,n);}}};this.expandPath(_15.join(this.pathSeparator),_13,f);}else{this.root.select();if(_14){_14(true,this.root);}}},getTreeEl:function(){return this.el;},render:function(){this.innerCt=this.el.createChild({tag:"ul",cls:"x-tree-root-ct "+(this.lines?"x-tree-lines":"x-tree-no-lines")});if(this.containerScroll){Ext.dd.ScrollManager.register(this.el);}if((this.enableDD||this.enableDrop)&&!this.dropZone){this.dropZone=new Ext.tree.TreeDropZone(this,this.dropConfig||{ddGroup:this.ddGroup||"TreeDD",appendOnly:this.ddAppendOnly===true});}if((this.enableDD||this.enableDrag)&&!this.dragZone){this.dragZone=new Ext.tree.TreeDragZone(this,this.dragConfig||{ddGroup:this.ddGroup||"TreeDD",scroll:this.ddScroll});}this.getSelectionModel().init(this);this.root.render();if(!this.rootVisible){this.root.renderChildren();}return this;}});