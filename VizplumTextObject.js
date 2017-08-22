/*
Created by Ravisankar Avidi from Vizplum Corporation
*/

define(['jquery','qlik'], function($,qlik,cssContent) {
    'use strict';
	$("<style>").html(cssContent).appendTo("head");
				
	return {
		initialProperties: {
				task: []
			},
			definition: {
				type: "items",
				component: "accordion",
				items: {
					settings : {
						uses : "settings",
						type : "items",
						items : {							
							Text: {
									ref: "text",
									label: "Text",
									type: "string",
									defaultValue: 'Sample text'
							},
							Font:
								{
									ref: "font",
									label: "Font settings",
									type: "items",
									items : {
										
										fontfamily: {
											label:"Font Family",
											type: "string",
											ref: "fontfamily",
											defaultValue: "Times New Roman",
											component: "dropdown",
											options:
												[
												{
													value: "Algerian",
													label: "Algerian"
												},
												{
													value: "Arial",
													label: "Arial"
												},
												{
													value: 'Baskerville Old Face',
													label: 'Baskerville Old Face'
												},
												{
													value: 'Bradley Hand ITC',
													label: 'Bradley Hand ITC'
												},
												{
													value: "Calibri",
													label: "Calibri"
												},
												{
													value: 'Cambria',
													label: 'Cambria'
												},
												{
													value: 'Chiller',
													label: 'Chiller'
												},
												{
													value: "Comic Sans MS",
													label: "Comic Sans MS"
												},
												{
													value: "Georgia",
													label: "Georgia"
												},
												{
													value: 'Gigi',
													label: 'Gigi'
												},
												{
													value: 'Harrington',
													label: 'Harrington'
												},
												{
													value: 'Old English Text MT',
													label: 'Old English Text MT'
												},
												{
													value: 'Pristina',
													label: 'Pristina'
												},
												{
													value: 'Segoe UI',
													label: 'Segoe UI'
												},
												{
													value: "Times New Roman",
													label: "Times New Roman"
												},
												{
													value: 'Verdana',
													label: 'Verdana'
												}											
												]
										},
										fontsize: {
											ref: "fontsize",
											label: "Font Size",
											type: "integer",
											defaultValue: 36
										},
										fontcolor : {
												ref: "fontcolor",
												label:"Font Color",
												type: "string",
												expression: "optional",
												defaultValue: 'red'										
										},
										dropshadow: {
											ref: "dropshadow",
											label: "Drop Shadow",
											type: "boolean",
											defaultValue: false
										},
										bold: {
											ref: "bold",
											label: "Bold",
											type: "boolean",
											defaultValue: false
										},
										italic: {
											ref: "italic",
											label: "Italic",
											type: "boolean",
											defaultValue: false
										},
										underline: {
											ref: "underline",
											label: "Underline",
											type: "boolean",
											defaultValue: false
										},
										strikethrough: {
											ref: "strikethrough",
											label: "Strikethrough",
											type: "boolean",
											defaultValue: false
										},
										visibility: {
											ref: "visibility",
											label: "Visibility",
											type: "boolean",
											defaultValue: false
										},
										invert: {
											ref: "invert",
											label: "Invert",
											type: "boolean",
											defaultValue: false
										}
									}									
								},
								Background: {
									ref: "background",
									label: "Background settings",
									type: "items",
									items: {
										backgroundcolor : {
											ref: "backgroundcolor",
											label:"Background Color",
											type: "string",
											expression: "optional",
											defaultValue: 'white',
										}										
									}
								},
								Layout: {
									ref: "layout",
									label: "Layout settings",
									type: "items",
									items: {
										horizontalalignment : {
										label: "Horizontal Alignment",
										ref: "horizontalalignment",
										component: "dropdown",
										options:
											[{
												value: "left",
												label: "Left"
											},
											{
												value: "center",
												label: "Center"
											},
											{
												value: "right",
												label: "Right"
											}
											],
										defaultValue: "left",												
										}
												
											
									}
								},
						}
					},
					Tasks: {
						ref: "Tasks",
						label: "Tasks",
						type: "items",
						items: {
							Task: {
								ref: "task",
								label: "Task",
								type: "array",
								allowAdd: true,
								allowRemove: true,
								allowMove: true,
								itemTitleRef: function(task){
									return task.name
									},
								addTranslation: 'Add Task',
								items: {																		
										SelectTask : {
											ref: "name",
											label: function(data) {
													return "Choose Task"
											},
											type: "string",
											component: "dropdown",
											options: 
											[
											{
												value: "Get App List",
												label: "Get App List"
											},
											{
												value: "Qlik Sense Version Number",
												label: "Qlik Sense Version Number"
											},
											{
												value: "Select All",
												label: "Select All"
											},
											{
												value: "Search Suggest",
												label: "Search Suggest"
											},
											{
												value: "Reload App",
												label: "Reload App"
											},
											{
												value: "Save App",
												label: "Save App"
											},
											{
												value: "Forward",
												label: "Forward"
											},
											{
												value: "Back",
												label: "Back"
											},
											{
												value: "Lock All",
												label: "Lock All"
											},
											{
												value: "Unlock All",
												label: "Unlock All"
											},
											{
												value: "Clear All",
												label: "Clear All"
											},
											{
												value: "Lock Field",
												label: "Lock Field"
											},
											{
												value: "Unlock Field",
												label: "Unlock Field"
											},
											{
												value: "Clear Field",
												label: "Clear Field"
											},
											{
												value: "Previous Sheet",
												label: "Previous Sheet"
											},
											{
												value: "Next Sheet",
												label: "Next Sheet"
											}
											]
											
										},
										Field: {
												ref: "field",
												label: "Field",
												type: "string",
												expression: "optional",
												show: function(task) {
													return 	(task.name == 'Lock Field' 		||
															task.name == 'Clear Field'		||
															task.name == 'Search Suggest'	||
															task.name == 'Unlock Field');
												}
										}
										
								}
							}
						}
					}
					
				}			
			},
			snapshot: {
				canTakeSnapshot: false
			},
			paint : function($element,layout) {
								
				var width = $element.width();
				var height = $element.height();
				
				var Text = layout.text;
				var id = "id_" + layout.qInfo.qId;
					
				//Font settings
				var FontFamily				= layout.fontfamily;
				var FontSize				= layout.fontsize;
				var FontColor				= layout.fontcolor;
				var DropShadow				= layout.dropshadow;
				var Bold					= layout.bold;
				var Italic					= layout.italic;
				var Underline				= layout.underline;
				var Strikethrough			= layout.strikethrough;
				var Visibility				= layout.visibility;
				var Invert					= layout.invert;
				
				var TaskArray	= layout.task;
				
				var div = '<div id='+id+'></div>';					
				$element.html(div)
				
				var findID = $element.find('#'+id);
									
				findID.css("color",FontColor);
				findID.css("font-size",FontSize);
					
				if (FontFamily) {
					findID.css("font-family",FontFamily);
				}
					
				if(Underline)
				{
					findID.css("text-decoration", "underline");
				}
					
				if(Bold)
				{
					findID.css("font-weight", "bold");
				}
					
				if(Italic)
				{
					findID.css("font-style", "italic");
				}
					
				if(DropShadow)
				{					
					findID.css("text-shadow", "2px 2px #FF0000");
				}
					
				if(Strikethrough)
				{
					findID.css("text-decoration", "line-through");
				}
					
				if(Visibility)
				{
					findID.css("visibility", "hidden");
				}
					
				if(Invert)
				{
					findID.css("filter", "invert(100%)");
				}
				
				//Background settings					
				var BackgroundColor = layout.backgroundcolor;
				findID.css("background-color",BackgroundColor);
					
				//Layout settings
				var HorizontalAlignment = layout.horizontalalignment;				
				switch (HorizontalAlignment) {
					case 'left':
						findID.css("text-align","left");							
						break;	
					case 'center':
						findID.css("text-align","center");	
						break;
					case 'right':
						findID.css("text-align","right");	
						break;	
				}
		
				findID.html(Text);
				
				//Task settings
				if(TaskArray && TaskArray.length!=0)
				{
					findID.css("cursor","pointer");

					var application = qlik.currApp();
					
					findID.click(function() {
						
					TaskArray.forEach(function(Task)
						{
						switch (Task.name){
							case 'Get App List':
							qlik.getGlobal().getAppList(function(list){
								var str = "";
								$.each(list, function(key, value) {
									str +=  value.qDocName + '\n';
								});
								alert('App List available:\n\n'+str);
							});
							break;
							
							case 'Qlik Sense Version Number':
							var global = qlik.getGlobal();
							global.getProductVersion(function(reply){
								alert('Qlik Sense Version: '+reply.qReturn);
							});
							break;
							
							case 'Select All':
							application.field.selectAll(true);
							break;
							
							case 'Search Suggest':
							var searchTerm = [Task.field];
							if (searchTerm) {
								application.searchSuggest(searchTerm, {}, function(reply) {
									var str = "";
									reply.qResult.qSuggestions.forEach(function(sugg){
										str += sugg.qValue + ' ';
									});
									alert(str);
								});
							}
							break;
							
							case 'Reload App':
							application.doReload();
							break;
							
							case 'Save App':
							application.doReload().then(function(){
								application.doSave();
							});
							break;
							
							case 'Forward':
							application.forward();
							break;
							
							case 'Back':
							application.back();
							break;
							
							case 'Lock All':
							application.lockAll();
							break;
							
							case 'Unlock All':
							application.unlockAll();
							break;
							
							case 'Clear All':
							application.clearAll();
							break;
							
							case 'Lock Field':
							if(Task.field){
								application.field(Task.field).lock();
							}
							break;
							
							case 'Unlock Field':
							if(Task.field){
								application.field(Task.field).unlock();
							}
							break;
							
							case 'Clear Field':
							if(Task.field){
								application.field(Task.field).clear();
							}
							break;
							
							case 'Previous Sheet':
							qlik.navigation.prevSheet();
							break;
							
							case 'Next Sheet':
							qlik.navigation.nextSheet();
							break;
							
						}
						});
					});
				}
			}
	};

});