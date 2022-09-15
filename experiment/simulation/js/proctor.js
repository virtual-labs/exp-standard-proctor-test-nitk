//Water to be added(g),  Weight of cylinder+compacted soil(w1 g), Weight of container with lid(w2)g, Weight of container with lid+wet soil(w3)g, Weight of container with lid+dry soil(w4)g
// var dataset=[[160,3828,43,76,72,1], //(aishwarya)
			 // [180,3866,27,76,69.5,2],
			 // [200,3970,33.5,67,62,3],
			 // [220,4059,34,79,72,4],
			 // [240,4154,41,100,89,5],
			 // [260,4157,45,84.5,76.8,6],
			 // [280,4174,15.5,30,27,7],
			 // [300,4049,17.4,27,25,8],
			 // [320,4036,17,29,26.5,9],
			 // [340,4024,16.5,38.5,32.5,10]];
// var dataset=[[160,3828,15.50,76,72,1], //(aishwarya)
			 // [180,3866,15.50,76,69.50,2],
			 // [200,3970,15.50,67,62,3],
			 // [220,4059,15.50,79,72,4],
			 // [240,4154,15.50,100,89,5],
			 // [260,4157,15.50,84.50,76.80,6],
			 // [280,4174,15.50,30,27,7],
			 // [300,4049,15.50,27,25,8],
			 // [320,4036,15.50,29,26.50,9],
			 // [340,4024,15.50,38.50,32.50,10]];

// var dataset=[[0.65,4020,30,36.3,35.35,1], //Guruprasad
			 // [0.88,4120,30,39.25,38.37,2],
			 // [1.10,4245,32.4,41.27,40.17,3],
			 // [1.46,4290,29.8,37.5,36.04,4],
			 // [1.08,4400,30.6,38.66,37.58,5],
			 // [1.49,4370,26.71,37.22,35.73,6]];
	
let countLayer=0,myInt;	
var dataset=[[0.65,4020,30,36.3,35.65,1,140], //Guruprasad (interchanged result) 1
			 [1.10,4245,32.4,41.27,40.17,2,200], //3
			 [1.08,4400,30.6,38.66,37.58,3,260], //5
			 [1.49,4370,26.71,37.22,35.73,4,320], //6
			 [1.46,4290,29.8,37.5,36.04,5,380]]; //4

var mldDia = 10, mldHght=12.5, hdr=31, layerNo=3, compEnergy=3, mldWght=2315, mldVol=981.74;  //Guruprasad
// var mldDia = 10, mldHght=13, hdr=31, layerNo=3, compEnergy=3, mldWght=2181, mldVol=1021.01; //(aishwarya)
// Diameter of mould	10cm
// Height of mould	13cm
// Height of drop of rammer	31cm
// No.of layers	3
// Compactive energy imparted to the soil, E	3KJ/m2
// Empty weight of mould(wc)g	2181
// Volume of mould(vc)cc	1021.01

var questions=["What is the weight of the soil sample taken for the experiment?",
				"What is the size of the sieve used in the test?",
				"How many blows should be given during compaction of the soil?",
				"In how many layers the soil sample should be placed in the mould?",
				"The process of Compaction involves removal of __________."];
var options2=[["4.0kg","2.0kg","3.0kg","5.0kg"],//2.0kg
			  ["20µm","30µm","10µm","50µm"],//20µm
			  ["30","20","28","25"],//25   
			  ["3","4","6","7"],//3
			  ["Water","Solid","Air","None of the above"]];//Air

function validateFormativeQA(qn,ans,left,top)
{
	$("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
  
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}

var cnt=0;
var repeat=0;

var p=0;
var d=".00";
var data=0;
function IsInt(num)
{
	if(Number.isInteger(num))
	{
		data=num+d;
	}
	else
	{
		data=num;
	}
}

$(function()
{
	$('input').on('input', function() {
		this.value = this.value.match(/\d*(\.\d*)?/)[0];
	});
});

function generate_table() 
{
	var j=0;
    var table = document.getElementById("dataTable");
    for(var i=4;i>=0;i--)
    {
			$("#dataTable").delay()
            .queue(function (generate_table) {
            $(this).append("<tr><td>" + dataset[j][5] + "</td><td>" + dataset[j][0] + "</td><td>"+dataset[j][1]+"</td><td>"+(dataset[j][1] - mldWght)+"</td><td>"+((dataset[j][1] - mldWght)/mldVol).toFixed(4)+"</td><td>"+dataset[j][2]+"</td><td>" + dataset[j][3] + "</td><td>" + dataset[j][4] + "</td><td>" + (((dataset[j][3]-dataset[j][4])/(dataset[j][4]-dataset[j][2]))*100).toFixed(4) + "</td><td>"+(((dataset[j][1] - mldWght)/mldVol)/(1+((dataset[j][3]-dataset[j][4])/(dataset[j][4]-dataset[j][2])))).toFixed(4)+"</td></tr>");
			j++;
            generate_table(); 
        });
	}
}

function navNext()
{
	for(temp=0;temp<=17;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

function animatearrow()
{
	if (document.getElementById('arrow1').style.visibility=="hidden")
		document.getElementById('arrow1').style.visibility="visible";
	else
		document.getElementById('arrow1').style.visibility="hidden";
}

function myStopFunction() 
{
    clearInterval(myInt);
    document.getElementById('arrow1').style.visibility="hidden";
}

function blinkArrow(l,t,d,h)
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+l+"px; top:"+t+"px; height:"+h+"px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+d+"deg)"; 
	document.getElementById("arrow1").style.msTransform = "rotate("+d+"deg)";
	document.getElementById("arrow1").style.transform = "rotate("+d+"deg)";
}

function magic()
{
	if(simsubscreennum==1)
	{
		repeat+=1;
		refresh();
		 document.getElementById('mark1').style.visibility="hidden";
		 document.getElementById('mark2').style.visibility="hidden";
		 document.getElementById('mark3').style.visibility="hidden";
		 document.getElementById('1-1').style.visibility="visible";
		 document.getElementById('1-3').style.visibility="visible";
		 document.getElementById('trial').style="visibility:visible; left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		 document.getElementById('trial').innerHTML="Trial : " + repeat;
		if(repeat>=2)
		{
			document.getElementById("p1-1").innerHTML="";
		}			
		setTimeout(function()
		{
			blinkArrow(277.5,490,90,30);
			document.getElementById("1-1").onclick=function()
			{
				myStopFunction();
				document.getElementById("1-1").onclick="";
				document.getElementById("1-1").style.visibility="hidden";
				document.getElementById("1-0").style.backgroundColor="lightgrey";
				setTimeout(function()
				{
					document.getElementById("1-2").style.visibility="visible";
					document.getElementById("p1-1").innerHTML="000.10";
					setTimeout(function()
					{
						blinkArrow(300,180,360,40);
						document.getElementById("1-2").onclick=function()
						{
							myStopFunction();
							document.getElementById("1-2").onclick="";
							document.getElementById("1-2").style.animation="movePlate 1.5s forwards";
							setTimeout(function()
							{
								blinkArrow(387.5,490,90,30);
								document.getElementById("1-3").onclick=function()
								{
									myStopFunction();
									document.getElementById("1-3").onclick="";
									document.getElementById("1-3").style.visibility="hidden";
									document.getElementById("p1-1").innerHTML="000.00";
									setTimeout(function()
									{
										document.getElementById("1-4").style.visibility="visible";
										blinkArrow(630,190,360,40);
										document.getElementById("1-4").onclick=function()
										{
											myStopFunction();
											document.getElementById("1-4").onclick="";
											document.getElementById('1-4').style.transformOrigin = "100% 80%";
											document.getElementById('1-4').style.animation = "rotateSieve 1.5s forwards ";
											setTimeout(function()
											{
												document.getElementById('1-4').style.visibility="hidden";
												document.getElementById('1-5').style.visibility="visible";
												setTimeout(function()
												{
													document.getElementById("p1-1").innerHTML="2000.00";
													document.getElementById("nextButton").style.visibility="visible";
												},500);
											},1500);
										}	
									},1000);
								}
							},1500);
							}
					},750);
				},650);
			}
		},500);
	}
	
	else if(simsubscreennum==2)
	{
		refresh();
		document.getElementById('1-1').style.visibility="hidden";
		document.getElementById('1-3').style.visibility="hidden";
		document.getElementById("1-2").style.visibility="hidden";
		document.getElementById("1-4").style.visibility="hidden";
		document.getElementById("1-5").style.visibility="hidden";
		document.getElementById("nextButton").style.visibility = "hidden";
		
		document.getElementById('2-1').style.visibility="visible";
        document.getElementById('2-2').style.visibility="visible";
		
		setTimeout(function()
		{
			blinkArrow(440,360,180,40);
			document.getElementById('2-2').onclick=function()
			{
				myStopFunction();
				document.getElementById('2-2').style.animation="placeSieve 1.5s forwards";
				setTimeout(function()
				{
					document.getElementById('2-6').style.visibility="visible";
					setTimeout(function()
					{
						blinkArrow(560,215,360,40);
						document.getElementById('2-6').onclick=function()
						{
							myStopFunction();
							document.getElementById('2-6').style.transformOrigin = "100% 80%";
							document.getElementById('2-6').style.animation = "rotateSieve 1.0s forwards ";
							setTimeout(function()
							{
								document.getElementById('2-7').style.visibility="visible";
								setTimeout(function()
								{
									document.getElementById('2-6').style.visibility="hidden";
									document.getElementById('2-7').style.visibility="hidden";
									setTimeout(function()
									{
										document.getElementById('2-3').style.visibility="visible";
										document.getElementById('2-5').style.visibility="visible";
										blinkArrow(394,214,360,40);
										document.getElementById('2-5').onclick=function()
										{
											myStopFunction();
											document.getElementById('2-5').style.animation="placeCap 0.75s forwards";
											setTimeout(function()
											{
												if(repeat==1)
												{
													validateFormativeQA(0,1,"100px","150px");
												}
												else
													document.getElementById('nextButton').style.visibility="visible";
											},1000);
										}
									},300);
								},200); 
							},800);
						}
					},1000);
				},1500);
			}
		},800);
	}
	
	else if(simsubscreennum==3)
	{
		refresh();
		for(var i=1; i<=3; i++)
		{
			document.getElementById("2-"+i).style.visibility="hidden";
		}
		for(var i=5; i<=7; i++)
		{
			document.getElementById("2-"+i).style.visibility="hidden";
		}
		document.getElementById('3-1').style.visibility="visible";
		document.getElementById('3-2').style.visibility="visible";
		document.getElementById('3-3').style.visibility="visible";
		document.getElementById('3-5').style.visibility="visible";
		document.getElementById('3-7').style.visibility="visible";
		document.getElementById('3-8').style.visibility="visible";
		
		blinkArrow(435,230,180,40);
		document.getElementById('3-1').onclick=function()
		{
			myStopFunction();
			document.getElementById('3-1').style.visibility="hidden";
			document.getElementById('3-6').style.visibility="visible";
			document.getElementById('3-9').style.visibility="visible";
			blinkArrow(435,180,180,40);
			document.getElementById('3-9').onclick=function()
			{
				myStopFunction();
				document.getElementById('3-9').onclick="";
				document.getElementById('3-9').style.visibility="hidden";
				document.getElementById('3-10').style.visibility="visible";
				blinkArrow(192,163,180,40);
				document.getElementById('3-7').onclick=function()
				{
					myStopFunction();
					document.getElementById('3-7').onclick="";
					document.getElementById('3-7').style.visibility="hidden";
					document.getElementById('3-11').style.visibility="visible";
					blinkArrow(377,163.5,360,40);
					document.getElementById('3-8').onclick=function()
					{
						myStopFunction();
						document.getElementById('3-8').onclick="";
						document.getElementById('3-8').style.visibility="hidden";
						document.getElementById('3-12').style.visibility="visible";
						blinkArrow(222,354,90,40);
						document.getElementById('3-3').onclick=function()
						{
							myStopFunction();
							document.getElementById('3-3').onclick="";
							document.getElementById('3-3').style.visibility="hidden";
							document.getElementById('3-4').style.visibility="visible";
							document.getElementById("3-6").style.animation="shakeSieveSet 0.5s infinite linear";
							setTimeout(function()
							{
								blinkArrow(300,365,90,40);
								document.getElementById('3-5').onclick=function()
								{
									myStopFunction();
									document.getElementById('3-5').onclick="";
									document.getElementById("3-6").style.animation="";
									document.getElementById('3-3').style.visibility="visible";
									document.getElementById('3-4').style.visibility="hidden";
									document.getElementById("nextButton").style.visibility="visible";
								}
							},4000);
						}
					}
				}
			}
		}
	}
	
	else if(simsubscreennum==4)
	{
		refresh();
		for(var i=1; i<=12; i++)
		{
			document.getElementById("3-"+i).style.visibility="hidden";
		}
		document.getElementById('4-1').style.visibility="visible";
		document.getElementById('4-2').style.visibility="visible";
		document.getElementById('4-8').style.visibility="visible";
		document.getElementById('4-9').style.visibility="visible";
		document.getElementById('4-10').style.visibility="visible";
		document.getElementById('4-11').style.visibility="visible";
		document.getElementById('4-12').style.visibility="visible";
		
		blinkArrow(376,185,360,40);
		document.getElementById('4-12').onclick=function()
		{
			myStopFunction();
			document.getElementById('4-12').style.visibility="hidden";
			document.getElementById('4-14').style.visibility="visible";
			blinkArrow(194,182,180,40);
			document.getElementById('4-11').onclick=function()
			{
				myStopFunction();
				document.getElementById('4-11').style.visibility="hidden";
				document.getElementById('4-13').style.visibility="visible";
				setTimeout(function(){
					blinkArrow(280,165,-90,40);
					document.getElementById('4-10').onclick=function()
					{
						myStopFunction();
						document.getElementById('4-10').style.visibility="hidden";
						setTimeout(function(){
							blinkArrow(280,150,-90,40);
							document.getElementById('4-2').onclick=function()
							{
								myStopFunction();
								document.getElementById('4-2').style.visibility="hidden";
								document.getElementById('4-5').style.visibility="visible";
								document.getElementById('4-6').style.visibility="visible";
								document.getElementById('4-7').style.visibility="visible";
								document.getElementById('4-10').style.visibility="hidden";
								document.getElementById('4-13').style.visibility="hidden";
								document.getElementById('4-14').style.visibility="hidden";
								document.getElementById('4-8').style.visibility="hidden";
								document.getElementById('4-9').style.visibility="hidden";
								
								document.getElementById('4-1').style.visibility="hidden";
								setTimeout(function()
								{
									document.getElementById('4-16').style.visibility="visible";
								},800);
								setTimeout(function()
								{
									blinkArrow(590,250,270,40);
									document.getElementById('4-5').onclick="";
									document.getElementById('4-7').onclick=function()
									{
										myStopFunction();
										document.getElementById('4-7').style.visibility="hidden";
										document.getElementById('4-3').style.visibility="visible"; //cement
										blinkArrow(477.5,290,180,40);
										document.getElementById('4-5').onclick="";
										document.getElementById('4-6').onclick=function()
										{
											myStopFunction();
											document.getElementById('4-6').onclick="";
											document.getElementById('4-6').style.visibility="hidden";
											document.getElementById('4-19').style.visibility="visible";
											document.getElementById('4-18').style.visibility="visible";
											document.getElementById('4-3').style.visibility="hidden";
											document.getElementById('4-4').style.visibility="visible";
											
											blinkArrow(505,200,360,40);
											document.getElementById('4-19').onclick=function()
											{
												myStopFunction();
												document.getElementById('4-19').onclick="";	
												document.getElementById('4-18').style.visibility="hidden";
												document.getElementById('4-19').style.transformOrigin = "100% 80%";
												document.getElementById('4-19').style.animation = "rotateSieve 1.0s forwards ";
												setTimeout(function()
												{
													document.getElementById('4-17').style.visibility="visible";
													setTimeout(function()
													{
														document.getElementById('4-17').style.visibility="hidden";
														setTimeout(function()
														{
															document.getElementById('4-15').style.visibility="visible";
															setTimeout(function()
															{
																document.getElementById('4-19').style.visibility="hidden";
																document.getElementById('nextButton').style.visibility="visible";
															},200);
														},200);
													},300);
												},500);
											}
										}
									}
								},1500);
							}
						},500);
					}
				 },500);
			}
		}
	}
	
	else if(simsubscreennum==5)
	{
		refresh();
		document.getElementById("4-4").style.visibility = "hidden";
		document.getElementById("4-5").style.visibility = "hidden";
		document.getElementById("4-15").style.visibility = "hidden";
		document.getElementById("4-16").style.visibility = "hidden";
		document.getElementById("4-17").style.visibility = "hidden";
		document.getElementById("4-18").style.visibility = "hidden";
		document.getElementById("nextButton").style.visibility = "hidden";
		
		document.getElementById("p5-1").style.visibility = "visible";
		document.getElementById("5-1").style.visibility = "visible";
		document.getElementById("5-4").style.visibility = "visible";
		
		document.getElementById("p5-2").innerHTML="Add "+dataset[p][6]+"ml of water into the graduated jar.";
		document.getElementById("b5-1").onclick=function()
		{
			document.getElementById("b5-1").onclick="";
			document.getElementById("p5-1").style.visibility = "hidden";
			blinkArrow(550,125,360,40);
			document.getElementById('5-1').onclick=function()
			{
				myStopFunction();
				document.getElementById('5-1').onclick="";
				document.getElementById('5-1').style.transformOrigin="100% 80%";
				document.getElementById('5-1').style.animation = "valveturn-2 1s forwards ";
				setTimeout(function()
				{
					document.getElementById('5-1').style.visibility="hidden";
					document.getElementById('5-2').style.visibility="visible";
					document.getElementById('5-3').style.visibility="visible";
					document.getElementById('5-3').style.animation="water-4 0.8s forwards";
					setTimeout(function()
					{
						document.getElementById('5-2').style.visibility="hidden";
						document.getElementById('5-3').style.visibility="hidden";
						document.getElementById('5-4').style.visibility="hidden";
						document.getElementById('5-5').style.visibility="visible";
						document.getElementById('5-7').style.visibility="visible";
						document.getElementById('5-8').style.visibility="visible";
						 
						blinkArrow(580,270,360,40);
						document.getElementById('5-5').onclick=function()
						{
							myStopFunction();
							document.getElementById('5-5').onclick="";
							document.getElementById('5-5').style.transformOrigin="100% 80%";
							document.getElementById('5-5').style.animation = "valveturn-2 1s forwards ";
							setTimeout(function(){
								document.getElementById('5-5').style.visibility="hidden";
								document.getElementById('5-6').style.visibility="visible";
								setTimeout(function()
								{
									document.getElementById('5-9').style.visibility="visible";
									document.getElementById('5-10').style.visibility="visible";
									document.getElementById('5-10').style.transformOrigin="100% 80%";
									document.getElementById('5-10').style.animation = "water-4 2.5s forwards ";
									setTimeout(function()
									{
										document.getElementById('5-9').style.visibility="hidden";
										// document.getElementById('5-11').style.visibility="hidden";
										document.getElementById('5-6').style.visibility="hidden";
										setTimeout(function()
										{
											document.getElementById("5-12").style.visibility="visible";
											blinkArrow(300,335,360,40);
											document.getElementById('5-12').onclick=function()
											{
												myStopFunction();
												document.getElementById('5-12').onclick="";
												document.getElementById('5-12').style.visibility="hidden";
												document.getElementById('5-13').style.visibility="visible";
												document.getElementById('5-13').style.animation = "mixSoil 1.5s 2 forwards ";
												setTimeout(function()
												{
													document.getElementById('5-14').style.visibility="visible";
													document.getElementById('5-7').style.visibility="hidden";
													document.getElementById('5-10').style.visibility="hidden";
													document.getElementById('5-13').style.visibility="hidden";
													setTimeout(function()
													{
														document.getElementById("nextButton").style.visibility="visible";
													},500);
												},3000);
											}
										},500);
									},2500);
								},250);
							},1000);
						} 
					},800);
				},1000);
			}
		}
	}
	
	else if(simsubscreennum == 6)
	{
		refresh();
		document.getElementById("5-8").style.visibility="hidden";
		document.getElementById("5-14").style.visibility="hidden";
		document.getElementById("6-2").style.visibility="visible";
		document.getElementById("p6-1").innerHTML="000.10";
		document.getElementById("6-0").style.backgroundColor="lightgrey";
		setTimeout(function()
		{
			blinkArrow(488.5,490,90,30);
			document.getElementById("6-2").onclick=function()
			{
				myStopFunction();
				document.getElementById("6-2").onclick="";
				document.getElementById("6-2").style.visibility="hidden";
				document.getElementById("p6-1").innerHTML="000.00";
				setTimeout(function()
				{
					blinkArrow(60,435,180,40);
					document.getElementById("6-3").onclick=function()
					{
						document.getElementById("6-3").onclick="";
						placeMOuldAlongWithBplate();	
					}
					document.getElementById("6-4").onclick=function()
					{
						document.getElementById("6-4").onclick="";
						placeMOuldAlongWithBplate();	
					}
				},750);
			}
		},500);
	}
	else if(simsubscreennum == 7)
	{
		refresh();
		document.getElementById("nextButton").style.visibility = "hidden";	
		document.getElementById("p7-1").style.visibility = "visible";	
		document.getElementById("7-3").style="visibility:visible; position:absolute; left:470px; top:365px; height: 120px; width:120px;";	
		document.getElementById("7-5").style="visibility:visible; position:absolute; left:455px; top:335px; height:170px; width:154px;";	
		step7();
	
	}
	
	else if(simsubscreennum == 8)
	{
		refresh();
		document.getElementById("7-1").style.visibility = "hidden";
		document.getElementById("nextButton").style.visibility = "hidden";
		document.getElementById("7-7").style.visibility = "hidden";
		document.getElementById("7-4").style.visibility = "hidden";
		document.getElementById("7-3").style.visibility = "hidden";
		document.getElementById("7-3a").style.visibility = "hidden";
		document.getElementById("7-3ab").style.visibility = "hidden";
		document.getElementById("7-5").style.visibility = "hidden";
		
		document.getElementById("8-3").style.visibility = "visible";
		document.getElementById("8-4a").style="visibility:visible; position:absolute; left:308.75px; top:313px; height: 55px; width:101.5px; ";
		document.getElementById("8-7").style.visibility = "visible";
		
		blinkArrow(480,380,0,30);
		document.getElementById("8-4a").onclick=function()
		{
			myStopFunction();
			document.getElementById("8-4a").onclick="";
			document.getElementById("8-4a").style.animation="movecl 1s forwards";
			document.getElementById("8-4a").style.visibility = "visible";
			document.getElementById("8-3").style.visibility = "visible";
			document.getElementById("8-6").style.visibility = "visible";
			setTimeout(function()
			{
				document.getElementById("8-1").style.visibility = "visible";
				blinkArrow(385,250,270,30);
				document.getElementById("8-1").onclick=function()
				{
					myStopFunction();
					document.getElementById("8-1").onclick="";
					document.getElementById("8-4a").style.visibility = "hidden";
					document.getElementById("8-1").style.animation="movetam 0.75s 2 forwards";
					setTimeout(function()
					{
						document.getElementById("8-6").style.visibility = "hidden";
						document.getElementById("8-7").style.visibility = "hidden";
						document.getElementById("8-3b").style.visibility = "visible";
						setTimeout(function()
						{
							document.getElementById("8-1").style.visibility = "hidden";
							if(repeat==2)
							{
								validateFormativeQA(3,0,"100px","100px");
							}
							else
								document.getElementById("nextButton").style.visibility = "visible";
						},200);
					},1500);	
				}
			},1000);
		}
	}
	
	else if(simsubscreennum == 9)
	{
		refresh();
		document.getElementById("8-6").style.visibility="hidden";
		document.getElementById("8-3").style.visibility="hidden";
		document.getElementById("8-3b").style.visibility="hidden";
		
		document.getElementById("9-2").style.visibility="visible";
		
		document.getElementById("p9-1").innerHTML="000.09";
		document.getElementById("9-0").style.backgroundColor="lightgrey";
		setTimeout(function()
		{
			blinkArrow(488.5,490,90,30);
			document.getElementById("9-2").onclick=function()
			{
				myStopFunction();
				document.getElementById("9-2").onclick="";
				document.getElementById("9-2").style.visibility="hidden";
				document.getElementById("p9-1").innerHTML="000.00";
				setTimeout(function()
				{
					blinkArrow(70,447.5,180,40);
					document.getElementById("9-3").onclick=function()
					{
						myStopFunction();
						document.getElementById("9-3").onclick="";
						document.getElementById("9-3").style.animation="placeEmptyMould 1.25s forwards";
						document.getElementById("9-4").style.animation="placeBasePlate 1.25s forwards";
						document.getElementById("9-5").style.animation="placeWetSoil 1.25s forwards";
						setTimeout(function()
						{
							IsInt(dataset[p][1]);
							document.getElementById("p9-1").innerHTML=data;
							document.getElementById("p9-2").innerHTML="Weight of empty mould along with the base plate + compacted soil (W<sub>1</sub>) = "+dataset[p][1]+" g";
							
							setTimeout(function()
							{
								document.getElementById("nextButton").style.visibility="visible";
							},500);
						},1300);	
					}
				},750);
			}
		},500);
	}
	
	else if(simsubscreennum == 10)
	{
		refresh();
		document.getElementById("10-2").style.visibility="visible";
		document.getElementById("p10-1").innerHTML="000.01";
		document.getElementById("10-0").style.backgroundColor="lightgrey";
		setTimeout(function()
		{
			blinkArrow(488.5,490,90,30);
			document.getElementById("10-2").onclick=function()
			{
				myStopFunction();
				document.getElementById("10-2").onclick="";
				document.getElementById("10-2").style.visibility="hidden";
				document.getElementById("p10-1").innerHTML="000.00";
				setTimeout(function()
				{
					blinkArrow(60,435,180,40);
					document.getElementById("10-3").onclick=function()
					{
						myStopFunction();
						document.getElementById("10-3").onclick="";
						document.getElementById("10-3").style.animation="placeEmptyContainer 1.25s forwards";
						setTimeout(function()
						{
							IsInt(dataset[p][2]);
							document.getElementById("p10-1").innerHTML=data;
							document.getElementById("p10-2").innerHTML="Weight of empty container (W<sub>2</sub>) = "+dataset[p][2]+" g";
							setTimeout(function()
							{
								document.getElementById("nextButton").style.visibility="visible";
							},500);
						},1300);	
					}
				},750);
			}
		},500);
	}
     
	else if(simsubscreennum == 11)
	{
		refresh();
		document.getElementById("nextButton").style.visibility = "hidden";
		
		document.getElementById("11-7").style="visibility:visible; position:absolute; left:139px; top:380px; height:19px; width:95px;";
		document.getElementById("11-2").style="visibility:visible; position:absolute; left:125px; top:375px;";
		document.getElementById("p11-1").style.visibility = "visible";
		document.getElementById("b11-1").onclick=function()
		{
			document.getElementById("b11-1").onclick="";
			document.getElementById("p11-1").style.visibility = "hidden";
			blinkArrow(215,370,270,30);
			document.getElementById("11-2").onclick=function()
			{
				myStopFunction();
				document.getElementById("11-2").onclick="";
				document.getElementById("11-2").style.animation="movemould3 0.75s forwards";
				document.getElementById("11-7").style.animation="movesoilWithmould 0.75s forwards";
				setTimeout(function()
				{
					document.getElementById("11-7").style="position:absolute; left:376px; top:300px; height:16px; width:95px;";
					document.getElementById("11-2").style="position:absolute; left:350px; top:280px;";
					document.getElementById("11-2").style.animation="rotMv2 0.75s forwards";	
					document.getElementById("11-7").style.animation="rotMv2 0.75s forwards";	
					setTimeout(function()
					{
						document.getElementById("11-2b").style.visibility="visible";
						document.getElementById("11-2").style.visibility = "hidden";
						document.getElementById("11-7").style.visibility = "hidden";
						document.getElementById("11-part").style.visibility="visible";
						setTimeout(function()
						{
							document.getElementById("11-part").style.visibility="hidden";
							document.getElementById("11-5").style.visibility = "visible";
							setTimeout(function()
							{
							    document.getElementById("11-2b").style.visibility = "hidden";
								document.getElementById("11-1").style.visibility = "visible";
								document.getElementById("11-6").style.visibility = "visible";
								setTimeout(function()
								{
									blinkArrow(580,340,270,30);
									document.getElementById("11-1").onclick=function()
									{
										myStopFunction();
										document.getElementById("11-1").style.animation="moveTrowel 0.75s forwards";
										setTimeout(function()
										{
											document.getElementById("11-3").style.visibility = "visible";
											document.getElementById("11-1").style.visibility = "hidden";		
											document.getElementById("11-5a").style.visibility = "visible";
											document.getElementById("11-5").style.visibility = "hidden";
											document.getElementById("11-3").style.animation="moveTrowel2 2s forwards";	
											setTimeout(function()
											{
												document.getElementById("11-3").style="position:absolute; left:50px; top:335px;";	
												document.getElementById("11-3").style.animation="rotMv3 1s forwards";	
												setTimeout(function()
												{
													document.getElementById("11-3").style.visibility = "hidden";
													document.getElementById("11-6a").style.visibility = "visible";
													setTimeout(function(){
														document.getElementById("nextButton").style.visibility="visible";
													},250);
												},1000);
											},2000);
										},750);
									}
								},300);
							},1000);
						},150);
					},500);
				},750);
			}
		}
	}
	
	else if(simsubscreennum == 12)
	{
		refresh();
		document.getElementById("11-6").style.visibility="hidden";
		document.getElementById("11-6a").style.visibility="hidden";
		document.getElementById("11-5a").style.visibility="hidden";
		document.getElementById("12-2").style.visibility="visible";
		document.getElementById("p12-1").innerHTML="000.01";
		document.getElementById("12-0").style.backgroundColor="lightgrey";
		setTimeout(function()
		{
			blinkArrow(488.5,490,90,30);
			document.getElementById("12-2").onclick=function()
			{
				myStopFunction();
				document.getElementById("12-2").onclick="";
				document.getElementById("12-2").style.visibility="hidden";
				document.getElementById("p12-1").innerHTML="000.00";
				setTimeout(function()
				{
					blinkArrow(75,435,180,30);
					document.getElementById("12-3a").onclick=function()
					{
						myStopFunction();
						document.getElementById("12-3a").onclick="";
						document.getElementById("12-3a").style.animation="placeEmptyContainer 1.25s forwards";
						document.getElementById("12-3b").style.animation="placeContainerSample 1.25s forwards";
						setTimeout(function()
						{
							IsInt(dataset[p][3]);
							document.getElementById("p12-1").innerHTML=data;
							document.getElementById("p12-2").innerHTML="Weight of container + wet soil (W<sub>3</sub>) = "+dataset[p][3]+" g";
							setTimeout(function()
							{
								if(repeat==1)
								{
									validateFormativeQA(2,3,"100px","100px");
								}
								else
									document.getElementById("nextButton").style.visibility="visible";
							},500);
						},1300);	
					}
				},750);
			}
		},500);
	}
	
	else if(simsubscreennum == 13)
	{
		refresh();
		document.getElementById("nextButton").style.visibility = "hidden";
		document.getElementById("13-11").style.visibility = "visible";
		document.getElementById("incDoor13-"+repeat).style="visibility:visible;";
		document.getElementById("13-12").innerHTML="&nbsp;105";
		blinkArrow(90,235,270,30);
		document.getElementById("13-11").onclick=function()
		{
			myStopFunction();
			$('.door').toggleClass('doorOpen');
			document.getElementById("13-11").onclick="";	
			setTimeout(function(){
				document.getElementById("13-11").style.visibility="hidden";
			},350);
			setTimeout(function()
			{
				blinkArrow(75,485,180,30);
				document.getElementById("13-3a").onclick=function()
				{
					myStopFunction();
					document.getElementById("13-3a").onclick="";
					document.getElementById("13-3a").style.animation="placeContainerinOven 1.5s forwards";
					document.getElementById("13-3b").style.animation="placeContainerwithSoilinOven 1.5s forwards";
					setTimeout(function()
					{
						blinkArrow(430,255,0,35);
						document.getElementById("incDoor13-"+repeat).onclick=function()
						{
							myStopFunction();
							document.getElementById("incDoor13-"+repeat).onclick="";	
							$('.door').toggleClass('doorOpen');
							setTimeout(function()
							{
								document.getElementById("13-11").style.visibility="visible";
								
								var temp=105;
								blinkArrow(215,147,270,25);
								document.getElementById("13-13").onclick=function()
								{
									if(temp<111)
									{
										temp++;
										document.getElementById("13-12").innerHTML="&nbsp;"+temp;
									}
									if(temp>=110)
									{
										myStopFunction();
										document.getElementById("13-13").onclick="";
										setTimeout(function()
										{
											document.getElementById("13-2").style.visibility="visible";
											$("#13-3").fadeIn(1000);
											setTimeout(function()
											{
												$("#13-3").fadeOut(2000);
												setTimeout(function()
												{
													document.getElementById("13-2").style.visibility="hidden";
													takeOutCaontainer();
												},2000);
											},2000);
										},1500);
									}
								}
							},1150);
						}
					},1500);
				}	
			},1500);
		}
	}
	
	else if(simsubscreennum == 14)
	{
		refresh();
		document.getElementById("incDoor13-1").style.visibility="hidden";
		document.getElementById("incDoor13-2").style.visibility="hidden";
		document.getElementById("incDoor13-3").style.visibility="hidden";
		document.getElementById("13-11").style.visibility="hidden";
		
		document.getElementById("15-3").style.visibility="visible";
		setTimeout(function()
		{
			document.getElementById("p15-1").style.visibility="visible";
			document.getElementById("15-0").style.backgroundColor="lightgrey";
			document.getElementById("15-0").style.visibility="visible";
			document.getElementById("15-2").style.visibility="visible";
			document.getElementById("p15-2").style.visibility="visible";
			setTimeout(function()
			{
				blinkArrow(488.5,490,90,30);
				document.getElementById("15-2").onclick=function()
				{
					myStopFunction();
					document.getElementById("15-2").onclick="";
					document.getElementById("15-2").style.visibility="hidden";
					document.getElementById("p15-1").innerHTML="000.00";
					setTimeout(function()
					{
						blinkArrow(75,415,180,30);
						document.getElementById("15-3a").onclick=function()
						{
							myStopFunction();
							document.getElementById("15-3a").onclick="";
							document.getElementById("15-3a").style.animation="placeEmptyContainer 1.25s forwards";
							document.getElementById("15-3b").style.animation="placeContainerSample 1.25s forwards";
							document.getElementById("15-3").style.visibility="hidden";
							setTimeout(function()
							{
								IsInt(dataset[p][4]);
								document.getElementById("p15-1").innerHTML=data;
								document.getElementById("p15-2").innerHTML="Weight of container + dry soil (W<sub>4</sub>) = "+dataset[p][4]+" g" ;
								setTimeout(function()
								{
									if(repeat==2)
									{
										validateFormativeQA(4,2,"100px","100px");
									}
									else
										document.getElementById("nextButton").style.visibility="visible";
								},500);
							},1300);	
						}
					},750);
				}
			},500);
		},500);
	}
	
	else if(simsubscreennum == 15)
	{
		refresh();
		document.getElementById('trial').style.visibility="hidden";
		document.getElementById("p15-1").style.visibility="hidden";
		document.getElementById("15-0").style.visibility="hidden";
		document.getElementById("15-2").style.visibility="hidden";
		document.getElementById("p15-2").style.visibility="hidden";

		document.getElementById("wd").value="";
		document.getElementById("wd").disabled=false;
		document.getElementById("wc").value="";
		document.getElementById("wc").disabled=false;
		document.getElementById("dd").value="";
		document.getElementById("dd").disabled=false;
		
		for( var i=1;i<=3;i++)
		{
			document.getElementById("mark"+i).style.visibility="visible";
			document.getElementById("mark"+i).innerHTML="";
			document.getElementById("res"+i).style.visibility="visible";
			document.getElementById("res"+i).disabled=true;
			document.getElementById("chk"+i).style.visibility="visible";
		}
		document.getElementById("sheet1").style.visibility="visible";
		document.getElementById("sheet2").style.visibility="visible";
		
		document.getElementById("t1").innerHTML=dataset[p][5];
		document.getElementById("t2").innerHTML=dataset[p][0]+" g";
		document.getElementById("t3").innerHTML=dataset[p][1]+" g";
		document.getElementById("t4").innerHTML=dataset[p][2]+" g";
		document.getElementById("t5").innerHTML=dataset[p][3]+" g";
		document.getElementById("t6").innerHTML=dataset[p][4]+" g";
		
		var wd = (dataset[p][1] - mldWght)/mldVol;
		var wc = ((dataset[p][3] - dataset[p][4])/(dataset[p][4] - dataset[p][2]))*100;
		var dd = wd/(1+(wc/100));
		cnt=0;
		document.getElementById("chk1").onclick=function()
		{
			var id1=document.getElementById("wd");
			var mark1=document.getElementById("mark1");
			var chk1=document.getElementById("chk1");
			var res1=document.getElementById("res1");
			var sheet1=document.getElementById("sheet1");
			validateAnswer(id1, wd, mark1, chk1, res1, sheet1);
		}
		document.getElementById("chk2").onclick=function()
		{
			var id2=document.getElementById("wc");
			var mark2=document.getElementById("mark2");
			var chk2=document.getElementById("chk2");
			var res2=document.getElementById("res2");
			var sheet2=document.getElementById("sheet2");
			validateAnswer(id2, wc, mark2, chk2, res2, sheet2);
		}
		document.getElementById("chk3").onclick=function()
		{
			var id3=document.getElementById("dd");
			var mark3=document.getElementById("mark3");
			var chk3=document.getElementById("chk3");
			var res3=document.getElementById("res3");
			var sheet3=document.getElementById("sheet2");
			validateAnswer(id3, dd, mark3, chk3, res3, sheet2);
		}
	}
	else if(simsubscreennum == 16)
	{
		document.getElementById("Repeat15-1").style.visibility="hidden";
		document.getElementById("Repeat15-2").style.visibility="hidden";
		generate_table();
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},500);
	}
	else if(simsubscreennum == 17)
	{
		var dataX=[];
		var dataY=[];
		var i=0
		for (i=0;i<=4;i++)
		{
			dataX[i]=parseFloat((((dataset[i][3]-dataset[i][4])/(dataset[i][4]-dataset[i][2]))*100).toFixed(2));
			dataY[i]=parseFloat((((dataset[i][1] - mldWght)/mldVol)/(1+((dataset[i][3]-dataset[i][4])/(dataset[i][4]-dataset[i][2])))).toFixed(2));
		}
		
		$("#chartContainer").ejChart(
        {
		    primaryXAxis:
            {
			    labelFormat: "{value}",
                title: { text: 'Moisture content (%)' },
                range: { min: 11, max: 24, interval: 2 }
            },	
			primaryYAxis:
            {
				labelFormat: "{value}",
                title: { text: 'Dry Density,  ρdry (g/cc)' },
                range: { min:1.52, max: 1.88, interval: 0.08 }   
            },	
			series: 
			[
			    {
                points: [
					{x: dataX[0], y: dataY[0]},
					{x: dataX[1], y: dataY[1]},
					{x: dataX[2], y: dataY[2]},
					{x: dataX[3], y: dataY[3]},
					{x: dataX[4], y: dataY[4]}
				],
				type: 'spline',
				fill: "#0066FF",
				name : 'Moisture content v/s Dry Density',
				border :{width:5},
				tooltip:{visible:true},
				marker:{
					shape: 'circle',
					size:
					{
						height: 5, width: 5
					},
					visible: true
				}
				// ,					
				// enableAnimation :true
                },
				{
					points: [
					
					{ x: dataX[2], y: 0},
					{ x: dataX[2], y: dataY[2] },
					{ x: 0, y: dataY[2]}
					
					],
					type: 'line',
					dashArray : '10,4',
					name: 'Vertical line: optimum moisture content, horizontal line: maximum dry density',
					fill: "#FF1493",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
					enableAnimation :true
                }
			],
            load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:true}
        });
		setTimeout(function()
		{
			document.getElementById("p17-1").innerHTML="Optimum moisture content, W = "+dataX[2]+",  Maximum dry density = "+dataY[2]+" g/cc";
			document.getElementById("p17-1").style.visibility="visible";
			setTimeout(function()
			{
				document.getElementById("p17-2").style.visibility="visible";
			},500);
		},1500);
	}
}

function validateAnswer(id,ans,mark,chk,res,sheet)
{
	cnt++;
	if(!id.value || !id.value!=" ")
	{
		alert("Enter the value to proceed ");
	}
	else
	{
		n = id.value;
		if(Math.round(n) == Math.round(ans))
		{
			mark.style="visibility:visible; color:green; font-size:22px;";
			var right="&#10004;";
			mark.innerHTML=right;
			chk.style.visibility="hidden";
			res.style.visibility="hidden";
			id.style.color="black";
			id.disabled=true;
			id.style.backgroundColor="white";
			setTimeout(function()
			{
				sheet.style.visibility="hidden";
			},250);
			check();
		}
		else
		{
			res.disabled=false;
			var wrong="&#10008;";
			mark.style="visibility:visible; color:red; font-size:22px;";
			mark.innerHTML=wrong;
		}
	}	
	res.onclick=function()
	{
		setTimeout(function()
		{
			sheet.style.visibility="hidden";
		},250);
		chk.style.visibility="hidden";
		res.style.visibility="hidden";
		id.value=ans.toFixed(4);;
		id.style.color="black";
		id.disabled=true;
		id.style.backgroundColor="white";
		mark.style.visibility="hidden";
		check();
	}
}

function check()
{
	if(document.getElementById("chk3").style.visibility=="hidden")
	{
		if(repeat<3)
		{
			simsubscreennum=0;
			p++;
			document.getElementById("nextButton").style.visibility="visible";
		}
		else
		{
			simsubscreennum==16;
			document.getElementById("Repeat15-1").style.visibility="visible";
			document.getElementById("Repeat15-2").style.visibility="visible";
			setTimeout(() => document.getElementById("nextButton").style.visibility="visible",500);
		}
	}
}

function placeMOuldAlongWithBplate()
{
	myStopFunction();
	refresh();
	document.getElementById("6-3").onclick="";
	document.getElementById("6-4").onclick="";
	document.getElementById("6-3").style.animation="placeEmptyMould 1.25s forwards";
	document.getElementById("6-4").style.animation="placeBasePlate 1.25s forwards";
	setTimeout(function()
	{
		IsInt(mldWght);
		document.getElementById("p6-1").innerHTML=data;
		document.getElementById("p6-2").innerHTML="Weight of empty mould along with the base plate (Wc) = "+mldWght+" g";
		setTimeout(function()
		{
			if(repeat == 1)
			{
				validateFormativeQA(1,0,"100px","100px");
			}
			else
				document.getElementById("nextButton").style.visibility="visible";
		},500);
	},1300);
}

function takeOutCaontainer()
{
	blinkArrow(90,235,270,30);
	document.getElementById("13-11").onclick=function()
	{
		myStopFunction();
		$('.door').toggleClass('doorOpen');
		document.getElementById("13-11").onclick="";	
		setTimeout(function()
		{
			document.getElementById("13-11").style.visibility="hidden";
			setTimeout(function()
			{
				blinkArrow(75,245,180,30);
				document.getElementById("13-3a").onclick=function()
				{
					myStopFunction();
					document.getElementById("13-3a").onclick="";
					document.getElementById("13-3a").style.animation="placeContainerBack 1.5s forwards";
					document.getElementById("13-3b").style.animation="placeContainerwithSoilBack 1.5s forwards";
					setTimeout(function()
					{
						blinkArrow(430,255,0,35);
						document.getElementById("incDoor13-"+repeat).onclick=function()
						{
							myStopFunction();
							document.getElementById("incDoor13-"+repeat).onclick="";	
							$('.door').toggleClass('doorOpen');
							setTimeout(function()
							{
								document.getElementById("13-11").style.visibility="visible";
								document.getElementById("nextButton").style.visibility="visible";
							},1150);
						}
					},1500);			
				}
			},1500);
		},350);
	}
}


function step7FillMouldWithSoil()
{
	document.getElementById("7-2").style.animation="";
	document.getElementById("7-2a").style.animation="";
	document.getElementById("7-2b").style.animation="";
	countLayer++;
	blinkArrow(215,328,270,30);
	document.getElementById("7-2").onclick=function()
	{
		myStopFunction();
		document.getElementById("7-2").onclick="";
		document.getElementById("7-2").style.animation="movet1 1s forwards";
		setTimeout(function()
		{
			document.getElementById("7-2a").style="visibility:visible; position:absolute; position:absolute;left:60px; top:360px;";
			
			if(countLayer===1) {
				document.getElementById("7-1a").style.visibility="visible";
				document.getElementById("7-6").style.visibility = "hidden";	
			}
			if(countLayer===2) {
				document.getElementById("7-1a").style.visibility="hidden";
				document.getElementById("7-1b").style.visibility="visible";
			}
			if(countLayer===3) {
				document.getElementById("7-1b").style.visibility="hidden";
				// document.getElementById("7-1c").style.visibility="visible";
			}
			
			
			document.getElementById("7-2").style.visibility = "hidden";	
			document.getElementById("7-6").style.visibility = "hidden";	
			setTimeout(function()
			{
				document.getElementById("7-2a").style.animation="movet2 1s forwards";
				setTimeout(function()
				{
					document.getElementById("7-2b").style.visibility = "visible";
					blinkArrow(510,315,270,30);
					document.getElementById("7-2b").onclick=function()
					{
						myStopFunction();
						document.getElementById("7-2b").onclick="";
						document.getElementById("7-2b").style.animation="rott 2s forwards";
						document.getElementById("7-2a").style.visibility = "hidden";
						setTimeout(function()
						{
							document.getElementById("7-part").style.visibility="visible";
							setTimeout(function()
							{
								document.getElementById("7-part").style.visibility="hidden";
								setTimeout(function()
								{
									document.getElementById("7-2b").style.visibility = "hidden";
									if(countLayer===3) document.getElementById("7-3ab").style="visibility:visible; position:absolute; left:470px; top:365px; height: 120px; width:120px;";
									document.getElementById("7-2").style.visibility = "visible";
									document.getElementById("7-2").style.animation="moveback 2s forwards";
										
									setTimeout(() => step7RammingEachSoilLayer(),2200);
								},1500);
							},400);
						},100);
					}
				},1000);
			},500);
		},1000);
	}
}

function step7RammingEachSoilLayer()
{
	document.getElementById("7-e").style.animation="";
	document.getElementById("7-ee").style.animation="";
	document.getElementById("7-e").style="position:absolute;left:515px; top:310px; height: 150px; width:40px;";
	document.getElementById("7-ee").style="position:absolute;left:505px; top:200px; height: 150px; width:40px;";
									
	if(countLayer===3) document.getElementById("7-2").style.visibility="hidden";	
	document.getElementById("7-e").style.visibility = "visible";
	document.getElementById("7-ee").style.visibility = "visible";
	blinkArrow(520,325,180,30);
	document.getElementById("7-ee").onclick=function()
	{
		myStopFunction();
		document.getElementById("7-ee").onclick="";
		document.getElementById("7-ee").style.animation="ramming1 1s 2";
		setTimeout(function()
		{
			document.getElementById("7-e").style.animation="x1 0.5s forwards";
			document.getElementById("7-ee").style.animation="x2 0.5s forwards";
			setTimeout(function()
			{
				document.getElementById("7-ee").style="position:absolute; left:485px; top:200px; height: 150px; width:40px;";
				document.getElementById("7-ee").style.animation="ramming2 1s 2";
				setTimeout(function()
				{
					document.getElementById("7-e").style.animation="x3 0.5s forwards";
					document.getElementById("7-ee").style.animation="x4 0.5s forwards";
					setTimeout(function()
					{
						document.getElementById("7-ee").style="position:absolute; left:525px; top:200px; height: 150px; width:40px;";
						document.getElementById("7-ee").style.animation="ramming2 1s 2";
						setTimeout(function()
						{
							document.getElementById("7-e").style.visibility = "hidden";
							document.getElementById("7-ee").style.visibility = "hidden";
							if(countLayer==3) {
								document.getElementById("7-3ab").style.visibility="hidden";
								document.getElementById("nextButton").style.visibility="visible";
							}
							if(countLayer<3) step7FillMouldWithSoil();
						},2000);
					},600);
				},2000);
			},600);
		},2000);
	}
}

function step7()
{
	countLayer=0;
	document.getElementById("b7-1").onclick=function()
	{
		document.getElementById("b7-1").onclick="";
		document.getElementById("p7-1").style.visibility = "hidden";
		document.getElementById("7-1").style.visibility = "visible";
		document.getElementById("7-2").style.visibility = "visible";
		document.getElementById("7-6").style.visibility = "visible";
		step7FillMouldWithSoil();
	}
}

function refresh()
{
	document.getElementById("6-3").style.animation="";
	document.getElementById("6-4").style.animation="";
	document.getElementById("15-3a").style.animation="";
	document.getElementById("15-3b").style.animation="";
	document.getElementById("13-3a").style.animation="";
	document.getElementById("13-3b").style.animation="";
	document.getElementById("12-3a").style.animation="";
	document.getElementById("12-3b").style.animation="";
	document.getElementById("11-3").style.animation="";
	document.getElementById("11-1").style.animation="";
	document.getElementById("11-2").style.animation="";	
	document.getElementById("11-7").style.animation="";
	document.getElementById("10-3").style.animation="";
	document.getElementById("9-3").style.animation="";
	document.getElementById("9-4").style.animation="";
	document.getElementById("9-5").style.animation="";
	document.getElementById("8-1").style.animation="";
	document.getElementById("7-4").style.animation="";
	document.getElementById("7-e").style.animation="";
	document.getElementById("7-ee").style.animation="";
	document.getElementById("7-2").style.animation="";
	document.getElementById("7-2b").style.animation="";
	document.getElementById("7-2a").style.animation="";
	document.getElementById("7-3").style.animation="";
	document.getElementById("7-5").style.animation="";
	document.getElementById("5-13").style.animation="";
	document.getElementById("5-10").style.animation="";
	document.getElementById("5-5").style.animation="";
	document.getElementById("5-3").style.animation="";
	document.getElementById("5-1").style.animation="";
	document.getElementById("4-19").style.animation="";
	document.getElementById("3-6").style.animation="";
	document.getElementById("2-5").style.animation="";
	document.getElementById("2-6").style.animation="";
	document.getElementById("2-2").style.animation="";
	document.getElementById("1-2").style.animation="";
	document.getElementById("1-4").style.animation="";
	myStopFunction() ;
}