import {
	SAXParser,
	QualifiedTag,
	QualifiedAttribute
} from "sax";
import {EMFModel} from "../EMFModel";
import {Parser} from "xml2js";
import {ECore} from "../interfaces/EModelElement";
import InstanceLoader = ECore.InstanceLoader;
import EObject = ECore.EObject;
import ECoreFactory = ECore.ECoreFactory;
import EPackage = ECore.EPackage;
import {DOMParser, XMLSerializer} from "xmldom";
import {XMLProcessor} from "./XMLProcessor";





export class XMLParser {

	constructor(emfModel: EMFModel)
	{
		this.test3();
	}

	test3(){

		let xmlParser:DOMParser = new DOMParser();

		let document:Document = xmlParser.parseFromString( XMLParser.ECOREBPMN2MODEL, 'text/xml' );

		let xmlProcessor:XMLProcessor = new XMLProcessor(document);
		// xmlProcessor.dumpNode( document, 0  );
		let xmlSerializer:XMLSerializer = new XMLSerializer();
		let xmlString:string = xmlSerializer.serializeToString(document);

	}


	private static XMLTESTDATA: string = `<?xml version="1.0" encoding="UTF-8"?>
	<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:inspire="http://bpminspire.com/bpmn2/extension/inspire" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/20100524/MODEL-XMI http://www.omg.org/spec/DD/20100524/DI http://www.omg.org/spec/DD/20100524/DI-XMI http://www.omg.org/spec/DD/20100524/DC http://www.omg.org/spec/DD/20100524/DC-XMI http://www.omg.org/spec/BPMN/20100524/DI http://www.omg.org/spec/BPMN/20100524/DI-XMI" id="FE0080003A44EC4AAA298000000000000000" inspire:extensionVersion="2.4" expressionLanguage="http://www.w3.org/1999/XPath" typeLanguage="http://www.w3.org/2001/XMLSchema">
	<bpmn2:process id="FE0080003A44ECBE264C8000000000000004" name="Wait" isExecutable="true" processType="None">
	<bpmn2:extensionElements>
<inspire:DeploymentProperties retentionTime="0" basePriority="5" gotoPermissionMode="USER" useNewMethodNaming="true"/>
	<inspire:AnchoredPosition anchor="SOURCE" referenceAlignment="CENTER_CENTER" labelAlignment="TOP_LEFT"/>
	</bpmn2:extensionElements>
<bpmn2:startEvent id="FE0080003A44ED07483B8000000000000005" name="Start" isInterrupting="true">
	<bpmn2:extensionElements>
<inspire:DeploymentProperties retentionTime="0" basePriority="5" gotoPermissionMode="USER" startEventDefault="true"/>
	<inspire:MultilanguageString>
<values key="Default" value="Start"/>
	</inspire:MultilanguageString>
<inspire:AttributeMap>
<valueMap key="stepName" value="Start"/>
	</inspire:AttributeMap>
<inspire:AnchoredPosition anchor="SOURCE" referenceAlignment="CENTER_CENTER" labelAlignment="TOP_LEFT" referenceOffsetX="-8.0" referenceOffsetY="22.0"/>
	</bpmn2:extensionElements>
<bpmn2:outgoing>C067A8028AA4D343708000000000000427</bpmn2:outgoing>
</bpmn2:startEvent>
<bpmn2:endEvent id="FE0080003A44EE1B2A28800000000000000B" name="End">
	<bpmn2:extensionElements>
<inspire:MultilanguageString>
<values key="Default" value="End"/>
	</inspire:MultilanguageString>
<inspire:AttributeMap>
<valueMap key="stepName" value="End"/>
	</inspire:AttributeMap>
<inspire:AnchoredPosition anchor="SOURCE" referenceAlignment="CENTER_CENTER" labelAlignment="TOP_LEFT" referenceOffsetX="-7.0" referenceOffsetY="22.0"/>
	</bpmn2:extensionElements>
<bpmn2:incoming>C067A8028B516A570A8000000000000444</bpmn2:incoming>
</bpmn2:endEvent>
<bpmn2:dataObject id="FE0080003A44EEBAF4A28000000000000012" name="BPM inspire Variables" isCollection="true">
	<bpmn2:extensionElements>
<inspire:VariableDefinitions>
<inspire:VariableDefinition Name="Variable" Type="STRING">
<description>
	<values key="Default" value="Description of Variable"/>
	</description>
	</inspire:VariableDefinition>
</inspire:VariableDefinitions>
</bpmn2:extensionElements>
</bpmn2:dataObject>
<bpmn2:intermediateCatchEvent id="C067A80287DAB8E54C80000000000003DA" name="IntermediateCatchEvent">
	<bpmn2:extensionElements>
<inspire:AttributeMap>
<valueMap key="stepName" value="IntermediateCatchEvent"/>
	</inspire:AttributeMap>
<inspire:AnchoredPosition anchor="SOURCE" referenceAlignment="CENTER_CENTER" labelAlignment="TOP_LEFT"/>
	</bpmn2:extensionElements>
<bpmn2:incoming>C067A8028AA4D343708000000000000427</bpmn2:incoming>
<bpmn2:outgoing>C067A8028B516A570A8000000000000444</bpmn2:outgoing>
<bpmn2:timerEventDefinition id="C067A8028CB65511A28000000000000447">
	<bpmn2:timeDuration xsi:type="inspire:StringExpression" id="C067A8029014C9E42E8000000000000448" expression="PT10S"/>
	</bpmn2:timerEventDefinition>
</bpmn2:intermediateCatchEvent>
<bpmn2:sequenceFlow id="C067A8028AA4D343708000000000000427" sourceRef="FE0080003A44ED07483B8000000000000005" targetRef="C067A80287DAB8E54C80000000000003DA"/>
	<bpmn2:sequenceFlow id="C067A8028B516A570A8000000000000444" sourceRef="C067A80287DAB8E54C80000000000003DA" targetRef="FE0080003A44EE1B2A28800000000000000B"/>
	</bpmn2:process>
<bpmndi:BPMNDiagram id="FE0080003A44EC75D02A8000000000000002" name="Wait">
	<bpmndi:BPMNPlane id="FE0080003A44EC9642198000000000000003" bpmnElement="FE0080003A44ECBE264C8000000000000004">
	<bpmndi:BPMNShape id="FE0080003A44ED44ACB08000000000000006" bpmnElement="FE0080003A44ED07483B8000000000000005">
	<dc:Bounds height="35.0" width="35.0" x="80.5" y="80.5"/>
	<bpmndi:BPMNLabel id="FE0080003A44ED53857B8000000000000007">
	<dc:Bounds height="10.0" width="16.0" x="90.0" y="125.0"/>
	</bpmndi:BPMNLabel>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="FE0080003A44EE1E8AE2800000000000000C" bpmnElement="FE0080003A44EE1B2A28800000000000000B">
	<dc:Bounds height="35.0" width="35.0" x="582.5" y="182.5"/>
	<bpmndi:BPMNLabel id="FE0080003A44EE1F2ED5800000000000000D"/>
	</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="FE0080003A44EEC8250F8000000000000013" bpmnElement="FE0080003A44EEBAF4A28000000000000012">
	<dc:Bounds height="41.0" width="31.0" x="14.5" y="29.5"/>
	<bpmndi:BPMNLabel id="FE0080003A44EEC934268000000000000014"/>
	</bpmndi:BPMNShape>
<bpmndi:BPMNShape id="C067A80287FF698E84800000000000040D" bpmnElement="C067A80287DAB8E54C80000000000003DA">
	<dc:Bounds height="35.0" width="35.0" x="334.0" y="118.0"/>
	</bpmndi:BPMNShape>
<bpmndi:BPMNEdge id="C067A8028AA4D499188000000000000428" bpmnElement="C067A8028AA4D343708000000000000427" sourceElement="FE0080003A44ED44ACB08000000000000006" targetElement="C067A80287FF698E84800000000000040D">
	<di:waypoint x="98.0" y="115.5"/>
	<di:waypoint x="98.0" y="135.5"/>
	<di:waypoint x="334.0" y="135.5"/>
	</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge id="C067A8028B516BAD6E8000000000000445" bpmnElement="C067A8028B516A570A8000000000000444" sourceElement="C067A80287FF698E84800000000000040D" targetElement="FE0080003A44EE1E8AE2800000000000000C">
	<di:waypoint x="351.5" y="153.0"/>
	<di:waypoint x="351.5" y="200.0"/>
	<di:waypoint x="582.5" y="200.0"/>
	</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</bpmn2:definitions>`;


	private static ECOREDCMODEL: string = `
<?xml version="1.0" encoding="UTF-8"?>
<ecore:EPackage xmi:version="2.0"
    xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="dc"
    nsURI="http://www.omg.org/spec/DD/20100524/DC-XMI" nsPrefix="dc">
  <eClassifiers xsi:type="ecore:EClass" name="DocumentRoot">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value=""/>
      <details key="kind" value="mixed"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="mixed" unique="false" upperBound="-1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EFeatureMapEntry">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="elementWildcard"/>
        <details key="name" value=":mixed"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="xMLNSPrefixMap" upperBound="-1"
        eType="ecore:EClass http://www.eclipse.org/emf/2002/Ecore#//EStringToStringMapEntry"
        transient="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="xmlns:prefix"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="xSISchemaLocation" upperBound="-1"
        eType="ecore:EClass http://www.eclipse.org/emf/2002/Ecore#//EStringToStringMapEntry"
        transient="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="xsi:schemaLocation"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="bounds" upperBound="-2"
        eType="#//Bounds" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="Bounds"/>
        <details key="namespace" value="http://www.omg.org/spec/DD/20100524/DC"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="font" upperBound="-2" eType="#//Font"
        volatile="true" transient="true" derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="Font"/>
        <details key="namespace" value="http://www.omg.org/spec/DD/20100524/DC"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="point" upperBound="-2"
        eType="#//Point" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="Point"/>
        <details key="namespace" value="http://www.omg.org/spec/DD/20100524/DC"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Bounds">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="Bounds"/>
      <details key="kind" value="empty"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="height" ordered="false"
        lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EFloat">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="height"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="width" ordered="false"
        lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EFloat">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="width"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="x" ordered="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EFloat" defaultValueLiteral="0">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="x"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="y" ordered="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EFloat" defaultValueLiteral="0">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="y"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Font">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="Font"/>
      <details key="kind" value="empty"/>
    </eAnnotations>
    <eOperations name="non_negative_size" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="size >=  0"/>
      </eAnnotations>
      <eParameters name="diagnostics" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EDiagnosticChain">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
          <details key="documentation" value="The chain of diagnostics to which problems are to be appended."/>
        </eAnnotations>
      </eParameters>
      <eParameters name="context">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
          <details key="documentation" value="The cache of context-specific information."/>
        </eAnnotations>
        <eGenericType eClassifier="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EMap">
          <eTypeArguments eClassifier="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject"/>
          <eTypeArguments eClassifier="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject"/>
        </eGenericType>
      </eParameters>
    </eOperations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="isBold" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="isBold"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="isItalic" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="isItalic"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="isStrikeThrough" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="isStrikeThrough"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="isUnderline" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="isUnderline"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="size" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EFloat">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="size"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Point">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="Point"/>
      <details key="kind" value="empty"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="x" ordered="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EFloat" defaultValueLiteral="0">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="x"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="y" ordered="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EFloat" defaultValueLiteral="0">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="y"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
</ecore:EPackage>
	`;

	private static ECOREDIMODEL =
	`<?xml version="1.0" encoding="UTF-8"?>
<ecore:EPackage xmi:version="2.0"
    xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="di"
    nsURI="http://www.omg.org/spec/DD/20100524/DI-XMI" nsPrefix="di">
  <eClassifiers xsi:type="ecore:EClass" name="DocumentRoot">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value=""/>
      <details key="kind" value="mixed"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="mixed" unique="false" upperBound="-1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EFeatureMapEntry">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="elementWildcard"/>
        <details key="name" value=":mixed"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="xMLNSPrefixMap" upperBound="-1"
        eType="ecore:EClass http://www.eclipse.org/emf/2002/Ecore#//EStringToStringMapEntry"
        transient="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="xmlns:prefix"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="xSISchemaLocation" upperBound="-1"
        eType="ecore:EClass http://www.eclipse.org/emf/2002/Ecore#//EStringToStringMapEntry"
        transient="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="xsi:schemaLocation"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="diagramElement" upperBound="-2"
        eType="#//DiagramElement" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="DiagramElement"/>
        <details key="namespace" value="http://www.omg.org/spec/DD/20100524/DI"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="diagram" upperBound="-2"
        eType="#//Diagram" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="Diagram"/>
        <details key="namespace" value="http://www.omg.org/spec/DD/20100524/DI"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="edge" upperBound="-2" eType="#//Edge"
        volatile="true" transient="true" derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="Edge"/>
        <details key="namespace" value="http://www.omg.org/spec/DD/20100524/DI"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="label" upperBound="-2"
        eType="#//Label" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="Label"/>
        <details key="namespace" value="http://www.omg.org/spec/DD/20100524/DI"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="labeledEdge" upperBound="-2"
        eType="#//LabeledEdge" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="LabeledEdge"/>
        <details key="namespace" value="http://www.omg.org/spec/DD/20100524/DI"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="labeledShape" upperBound="-2"
        eType="#//LabeledShape" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="LabeledShape"/>
        <details key="namespace" value="http://www.omg.org/spec/DD/20100524/DI"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="node" upperBound="-2" eType="#//Node"
        volatile="true" transient="true" derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="Node"/>
        <details key="namespace" value="http://www.omg.org/spec/DD/20100524/DI"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="plane" upperBound="-2"
        eType="#//Plane" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="Plane"/>
        <details key="namespace" value="http://www.omg.org/spec/DD/20100524/DI"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="shape" upperBound="-2"
        eType="#//Shape" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="Shape"/>
        <details key="namespace" value="http://www.omg.org/spec/DD/20100524/DI"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="style" upperBound="-2"
        eType="#//Style" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="Style"/>
        <details key="namespace" value="http://www.omg.org/spec/DD/20100524/DI"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Diagram" abstract="true">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="Diagram"/>
      <details key="kind" value="empty"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="documentation" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="documentation"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="ownedStyle" ordered="false"
        upperBound="-1" eType="#//Style" changeable="false" transient="true" derived="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="rootElement" ordered="false"
        lowerBound="1" eType="#//DiagramElement" changeable="false" volatile="true"
        transient="true" derived="true" resolveProxies="false" eOpposite="#//DiagramElement/owningDiagram"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="id" eType="ecore:EDataType http://www.eclipse.org/emf/2003/XMLType#//ID"
        iD="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="id"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="resolution" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EFloat">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="resolution"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="DiagramElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="DiagramElement"/>
      <details key="kind" value="elementOnly"/>
      <details key="abstract" value="true"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="owningDiagram" ordered="false"
        eType="#//Diagram" changeable="false" volatile="true" transient="true" derived="true"
        resolveProxies="false" eOpposite="#//Diagram/rootElement"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="owningElement" ordered="false"
        eType="#//DiagramElement" changeable="false" transient="true" derived="true"
        resolveProxies="false" eOpposite="#//DiagramElement/ownedElement"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="ownedElement" ordered="false"
        upperBound="-1" eType="#//DiagramElement" changeable="false" transient="true"
        derived="true" resolveProxies="false" eOpposite="#//DiagramElement/owningElement"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="modelElement" ordered="false"
        eType="ecore:EClass http://www.eclipse.org/emf/2002/Ecore#//EObject" changeable="false"
        transient="true" derived="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="style" ordered="false"
        eType="#//Style" changeable="false" transient="true" derived="true"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="id" eType="ecore:EDataType http://www.eclipse.org/emf/2003/XMLType#//ID"
        iD="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="id"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Edge" abstract="true" eSuperTypes="#//DiagramElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="Edge"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="source" ordered="false"
        eType="#//DiagramElement" changeable="false" transient="true" derived="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="target" ordered="false"
        eType="#//DiagramElement" changeable="false" transient="true" derived="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="waypoint" lowerBound="2"
        upperBound="-1" eType="ecore:EClass DC.ecore#//Point" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="waypoint"/>
        <details key="namespace" value="http://www.omg.org/spec/DD/20100524/DI"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Label" abstract="true" eSuperTypes="#//Node">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="Label"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="bounds" ordered="false"
        eType="ecore:EClass DC.ecore#//Bounds" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="Bounds"/>
        <details key="namespace" value="http://www.omg.org/spec/DD/20100524/DC"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="LabeledEdge" abstract="true" eSuperTypes="#//Edge">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="LabeledEdge"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="ownedLabel" ordered="false"
        upperBound="-1" eType="#//Label" changeable="false" transient="true" derived="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="LabeledShape" abstract="true" eSuperTypes="#//Shape">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="LabeledShape"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="ownedLabel" ordered="false"
        upperBound="-1" eType="#//Label" changeable="false" transient="true" derived="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Node" abstract="true" eSuperTypes="#//DiagramElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="Node"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Plane" abstract="true" eSuperTypes="#//Node">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="Plane"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eOperations name="plane_element_type" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="planeElement->forAll(oclIsKindOf(Shape) or oclIsKindOf(Edge))"/>
      </eAnnotations>
      <eParameters name="diagnostics" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EDiagnosticChain">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
          <details key="documentation" value="The chain of diagnostics to which problems are to be appended."/>
        </eAnnotations>
      </eParameters>
      <eParameters name="context">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
          <details key="documentation" value="The cache of context-specific information."/>
        </eAnnotations>
        <eGenericType eClassifier="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EMap">
          <eTypeArguments eClassifier="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject"/>
          <eTypeArguments eClassifier="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject"/>
        </eGenericType>
      </eParameters>
    </eOperations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="planeElement" upperBound="-1"
        eType="#//DiagramElement" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="DiagramElement"/>
        <details key="namespace" value="http://www.omg.org/spec/DD/20100524/DI"/>
        <details key="group" value="http://www.omg.org/spec/DD/20100524/DI#DiagramElement"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Shape" abstract="true" eSuperTypes="#//Node">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="Shape"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="bounds" ordered="false"
        lowerBound="1" eType="ecore:EClass DC.ecore#//Bounds" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="Bounds"/>
        <details key="namespace" value="http://www.omg.org/spec/DD/20100524/DC"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Style" abstract="true">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="Style"/>
      <details key="kind" value="empty"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="id" eType="ecore:EDataType http://www.eclipse.org/emf/2003/XMLType#//ID"
        iD="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="id"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
</ecore:EPackage>`;


	private static ECOREBPMN2MODEL = `<?xml version="1.0" encoding="UTF-8"?>
<ecore:EPackage xmi:version="2.0"
    xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="bpmn2"
    nsURI="http://www.omg.org/spec/BPMN/20100524/MODEL-XMI" nsPrefix="bpmn2">
  <eClassifiers xsi:type="ecore:EClass" name="DocumentRoot">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value=""/>
      <details key="kind" value="mixed"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="mixed" unique="false" upperBound="-1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EFeatureMapEntry">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="elementWildcard"/>
        <details key="name" value=":mixed"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="xMLNSPrefixMap" upperBound="-1"
        eType="ecore:EClass http://www.eclipse.org/emf/2002/Ecore#//EStringToStringMapEntry"
        transient="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="xmlns:prefix"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="xSISchemaLocation" upperBound="-1"
        eType="ecore:EClass http://www.eclipse.org/emf/2002/Ecore#//EStringToStringMapEntry"
        transient="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="xsi:schemaLocation"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="activity" upperBound="-2"
        eType="#//Activity" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="activity"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="adHocSubProcess" upperBound="-2"
        eType="#//AdHocSubProcess" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="adHocSubProcess"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="flowElement" upperBound="-2"
        eType="#//FlowElement" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="flowElement"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="artifact" upperBound="-2"
        eType="#//Artifact" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="artifact"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="assignment" upperBound="-2"
        eType="#//Assignment" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="assignment"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="association" upperBound="-2"
        eType="#//Association" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="association"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#artifact"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="auditing" upperBound="-2"
        eType="#//Auditing" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="auditing"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="baseElement" upperBound="-2"
        eType="#//BaseElement" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="baseElement"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="baseElementWithMixedContent"
        upperBound="-2" eType="#//BaseElement" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="baseElementWithMixedContent"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="boundaryEvent" upperBound="-2"
        eType="#//BoundaryEvent" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="boundaryEvent"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="businessRuleTask" upperBound="-2"
        eType="#//BusinessRuleTask" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="businessRuleTask"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="callableElement" upperBound="-2"
        eType="#//CallableElement" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="callableElement"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="callActivity" upperBound="-2"
        eType="#//CallActivity" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="callActivity"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="callChoreography" upperBound="-2"
        eType="#//CallChoreography" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="callChoreography"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="callConversation" upperBound="-2"
        eType="#//CallConversation" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="callConversation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#conversationNode"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="conversationNode" upperBound="-2"
        eType="#//ConversationNode" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="conversationNode"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="cancelEventDefinition"
        upperBound="-2" eType="#//CancelEventDefinition" volatile="true" transient="true"
        derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="cancelEventDefinition"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#eventDefinition"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="eventDefinition" upperBound="-2"
        eType="#//EventDefinition" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="eventDefinition"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#rootElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="rootElement" upperBound="-2"
        eType="#//RootElement" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="rootElement"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="catchEvent" upperBound="-2"
        eType="#//CatchEvent" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="catchEvent"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="category" upperBound="-2"
        eType="#//Category" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="category"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#rootElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="categoryValue" upperBound="-2"
        eType="#//CategoryValue" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="categoryValue"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="choreography" upperBound="-2"
        eType="#//Choreography" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="choreography"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#collaboration"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="collaboration" upperBound="-2"
        eType="#//Collaboration" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="collaboration"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#rootElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="choreographyActivity" upperBound="-2"
        eType="#//ChoreographyActivity" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="choreographyActivity"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="choreographyTask" upperBound="-2"
        eType="#//ChoreographyTask" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="choreographyTask"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="compensateEventDefinition"
        upperBound="-2" eType="#//CompensateEventDefinition" volatile="true" transient="true"
        derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="compensateEventDefinition"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#eventDefinition"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="complexBehaviorDefinition"
        upperBound="-2" eType="#//ComplexBehaviorDefinition" volatile="true" transient="true"
        derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="complexBehaviorDefinition"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="complexGateway" upperBound="-2"
        eType="#//ComplexGateway" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="complexGateway"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="conditionalEventDefinition"
        upperBound="-2" eType="#//ConditionalEventDefinition" volatile="true" transient="true"
        derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="conditionalEventDefinition"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#eventDefinition"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="conversation" upperBound="-2"
        eType="#//Conversation" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="conversation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#conversationNode"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="conversationAssociation"
        upperBound="-2" eType="#//ConversationAssociation" volatile="true" transient="true"
        derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="conversationAssociation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="conversationLink" upperBound="-2"
        eType="#//ConversationLink" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="conversationLink"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="correlationKey" upperBound="-2"
        eType="#//CorrelationKey" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="correlationKey"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="correlationProperty" upperBound="-2"
        eType="#//CorrelationProperty" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="correlationProperty"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#rootElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="correlationPropertyBinding"
        upperBound="-2" eType="#//CorrelationPropertyBinding" volatile="true" transient="true"
        derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="correlationPropertyBinding"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="correlationPropertyRetrievalExpression"
        upperBound="-2" eType="#//CorrelationPropertyRetrievalExpression" volatile="true"
        transient="true" derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="correlationPropertyRetrievalExpression"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="correlationSubscription"
        upperBound="-2" eType="#//CorrelationSubscription" volatile="true" transient="true"
        derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="correlationSubscription"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataAssociation" upperBound="-2"
        eType="#//DataAssociation" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="dataAssociation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataInput" upperBound="-2"
        eType="#//DataInput" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="dataInput"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataInputAssociation" upperBound="-2"
        eType="#//DataInputAssociation" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="dataInputAssociation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataObject" upperBound="-2"
        eType="#//DataObject" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="dataObject"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataObjectReference" upperBound="-2"
        eType="#//DataObjectReference" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="dataObjectReference"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataOutput" upperBound="-2"
        eType="#//DataOutput" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="dataOutput"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataOutputAssociation"
        upperBound="-2" eType="#//DataOutputAssociation" volatile="true" transient="true"
        derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="dataOutputAssociation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataState" upperBound="-2"
        eType="#//DataState" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="dataState"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataStore" upperBound="-2"
        eType="#//DataStore" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="dataStore"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#rootElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataStoreReference" upperBound="-2"
        eType="#//DataStoreReference" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="dataStoreReference"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="definitions" upperBound="-2"
        eType="#//Definitions" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="definitions"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="documentation" upperBound="-2"
        eType="#//Documentation" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="documentation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="endEvent" upperBound="-2"
        eType="#//EndEvent" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="endEvent"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="endPoint" upperBound="-2"
        eType="#//EndPoint" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="endPoint"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#rootElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="error" upperBound="-2"
        eType="#//Error" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="error"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#rootElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="errorEventDefinition" upperBound="-2"
        eType="#//ErrorEventDefinition" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="errorEventDefinition"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#eventDefinition"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="escalation" upperBound="-2"
        eType="#//Escalation" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="escalation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#rootElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="escalationEventDefinition"
        upperBound="-2" eType="#//EscalationEventDefinition" volatile="true" transient="true"
        derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="escalationEventDefinition"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#eventDefinition"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="event" upperBound="-2"
        eType="#//Event" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="event"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="eventBasedGateway" upperBound="-2"
        eType="#//EventBasedGateway" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="eventBasedGateway"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="exclusiveGateway" upperBound="-2"
        eType="#//ExclusiveGateway" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="exclusiveGateway"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="expression" upperBound="-2"
        eType="#//Expression" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="expression"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="extension" upperBound="-2"
        eType="#//Extension" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="extension"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="extensionElements" upperBound="-2"
        eType="#//ExtensionAttributeValue" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="extensionElements"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="flowNode" upperBound="-2"
        eType="#//FlowNode" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="flowNode"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="formalExpression" upperBound="-2"
        eType="#//FormalExpression" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="formalExpression"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#expression"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="gateway" upperBound="-2"
        eType="#//Gateway" changeable="false" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="gateway"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="globalBusinessRuleTask"
        upperBound="-2" eType="#//GlobalBusinessRuleTask" volatile="true" transient="true"
        derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="globalBusinessRuleTask"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#rootElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="globalChoreographyTask"
        upperBound="-2" eType="#//GlobalChoreographyTask" volatile="true" transient="true"
        derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="globalChoreographyTask"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#choreography"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="globalConversation" upperBound="-2"
        eType="#//GlobalConversation" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="globalConversation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#collaboration"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="globalManualTask" upperBound="-2"
        eType="#//GlobalManualTask" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="globalManualTask"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#rootElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="globalScriptTask" upperBound="-2"
        eType="#//GlobalScriptTask" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="globalScriptTask"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#rootElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="globalTask" upperBound="-2"
        eType="#//GlobalTask" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="globalTask"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#rootElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="globalUserTask" upperBound="-2"
        eType="#//GlobalUserTask" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="globalUserTask"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#rootElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="group" upperBound="-2"
        eType="#//Group" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="group"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#artifact"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="humanPerformer" upperBound="-2"
        eType="#//HumanPerformer" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="humanPerformer"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#performer"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="performer" upperBound="-2"
        eType="#//Performer" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="performer"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#resourceRole"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="resourceRole" upperBound="-2"
        eType="#//ResourceRole" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="resourceRole"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="implicitThrowEvent" upperBound="-2"
        eType="#//ImplicitThrowEvent" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="implicitThrowEvent"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="import" upperBound="-2"
        eType="#//Import" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="import"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="inclusiveGateway" upperBound="-2"
        eType="#//InclusiveGateway" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="inclusiveGateway"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="inputSet" upperBound="-2"
        eType="#//InputSet" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="inputSet"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="interface" upperBound="-2"
        eType="#//Interface" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="interface"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#rootElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="intermediateCatchEvent"
        upperBound="-2" eType="#//IntermediateCatchEvent" volatile="true" transient="true"
        derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="intermediateCatchEvent"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="intermediateThrowEvent"
        upperBound="-2" eType="#//IntermediateThrowEvent" volatile="true" transient="true"
        derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="intermediateThrowEvent"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="ioBinding" upperBound="-2"
        eType="#//InputOutputBinding" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="ioBinding"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="ioSpecification" upperBound="-2"
        eType="#//InputOutputSpecification" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="ioSpecification"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="itemDefinition" upperBound="-2"
        eType="#//ItemDefinition" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="itemDefinition"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#rootElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="lane" upperBound="-2" eType="#//Lane"
        volatile="true" transient="true" derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="lane"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="laneSet" upperBound="-2"
        eType="#//LaneSet" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="laneSet"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="linkEventDefinition" upperBound="-2"
        eType="#//LinkEventDefinition" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="linkEventDefinition"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#eventDefinition"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="loopCharacteristics" upperBound="-2"
        eType="#//LoopCharacteristics" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="loopCharacteristics"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="manualTask" upperBound="-2"
        eType="#//ManualTask" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="manualTask"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="message" upperBound="-2"
        eType="#//Message" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="message"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#rootElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="messageEventDefinition"
        upperBound="-2" eType="#//MessageEventDefinition" volatile="true" transient="true"
        derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="messageEventDefinition"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#eventDefinition"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="messageFlow" upperBound="-2"
        eType="#//MessageFlow" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="messageFlow"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="messageFlowAssociation"
        upperBound="-2" eType="#//MessageFlowAssociation" volatile="true" transient="true"
        derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="messageFlowAssociation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="monitoring" upperBound="-2"
        eType="#//Monitoring" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="monitoring"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="multiInstanceLoopCharacteristics"
        upperBound="-2" eType="#//MultiInstanceLoopCharacteristics" volatile="true"
        transient="true" derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="multiInstanceLoopCharacteristics"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#loopCharacteristics"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="operation" upperBound="-2"
        eType="#//Operation" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="operation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="outputSet" upperBound="-2"
        eType="#//OutputSet" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="outputSet"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="parallelGateway" upperBound="-2"
        eType="#//ParallelGateway" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="parallelGateway"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="participant" upperBound="-2"
        eType="#//Participant" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="participant"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="participantAssociation"
        upperBound="-2" eType="#//ParticipantAssociation" volatile="true" transient="true"
        derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="participantAssociation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="participantMultiplicity"
        upperBound="-2" eType="#//ParticipantMultiplicity" volatile="true" transient="true"
        derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="participantMultiplicity"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="partnerEntity" upperBound="-2"
        eType="#//PartnerEntity" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="partnerEntity"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#rootElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="partnerRole" upperBound="-2"
        eType="#//PartnerRole" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="partnerRole"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#rootElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="potentialOwner" upperBound="-2"
        eType="#//PotentialOwner" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="potentialOwner"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#performer"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="process" upperBound="-2"
        eType="#//Process" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="process"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#rootElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="property" upperBound="-2"
        eType="#//Property" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="property"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="receiveTask" upperBound="-2"
        eType="#//ReceiveTask" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="receiveTask"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="relationship" upperBound="-2"
        eType="#//Relationship" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="relationship"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="rendering" upperBound="-2"
        eType="#//Rendering" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="rendering"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="resource" upperBound="-2"
        eType="#//Resource" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="resource"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#rootElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="resourceAssignmentExpression"
        upperBound="-2" eType="#//ResourceAssignmentExpression" volatile="true" transient="true"
        derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="resourceAssignmentExpression"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="resourceParameter" upperBound="-2"
        eType="#//ResourceParameter" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="resourceParameter"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="resourceParameterBinding"
        upperBound="-2" eType="#//ResourceParameterBinding" volatile="true" transient="true"
        derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="resourceParameterBinding"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="script" upperBound="-2"
        eType="ecore:EClass http://www.eclipse.org/emf/2002/Ecore#//EObject" volatile="true"
        transient="true" derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="script"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="scriptTask" upperBound="-2"
        eType="#//ScriptTask" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="scriptTask"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="sendTask" upperBound="-2"
        eType="#//SendTask" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="sendTask"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="sequenceFlow" upperBound="-2"
        eType="#//SequenceFlow" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="sequenceFlow"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="serviceTask" upperBound="-2"
        eType="#//ServiceTask" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="serviceTask"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="signal" upperBound="-2"
        eType="#//Signal" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="signal"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#rootElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="signalEventDefinition"
        upperBound="-2" eType="#//SignalEventDefinition" volatile="true" transient="true"
        derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="signalEventDefinition"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#eventDefinition"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="standardLoopCharacteristics"
        upperBound="-2" eType="#//StandardLoopCharacteristics" volatile="true" transient="true"
        derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="standardLoopCharacteristics"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#loopCharacteristics"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="startEvent" upperBound="-2"
        eType="#//StartEvent" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="startEvent"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="subChoreography" upperBound="-2"
        eType="#//SubChoreography" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="subChoreography"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="subConversation" upperBound="-2"
        eType="#//SubConversation" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="subConversation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#conversationNode"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="subProcess" upperBound="-2"
        eType="#//SubProcess" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="subProcess"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="task" upperBound="-2" eType="#//Task"
        volatile="true" transient="true" derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="task"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="terminateEventDefinition"
        upperBound="-2" eType="#//TerminateEventDefinition" volatile="true" transient="true"
        derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="terminateEventDefinition"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#eventDefinition"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="text" upperBound="-2" eType="ecore:EClass http://www.eclipse.org/emf/2002/Ecore#//EObject"
        volatile="true" transient="true" derived="true" containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="text"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="textAnnotation" upperBound="-2"
        eType="#//TextAnnotation" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="textAnnotation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#artifact"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="throwEvent" upperBound="-2"
        eType="#//ThrowEvent" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="throwEvent"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="timerEventDefinition" upperBound="-2"
        eType="#//TimerEventDefinition" volatile="true" transient="true" derived="true"
        containment="true" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="timerEventDefinition"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#eventDefinition"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="transaction" upperBound="-2"
        eType="#//Transaction" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="transaction"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="userTask" upperBound="-2"
        eType="#//UserTask" volatile="true" transient="true" derived="true" containment="true"
        resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="userTask"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="affiliation" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Activity" eSuperTypes="#//FlowNode">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tActivity"/>
      <details key="kind" value="elementOnly"/>
      <details key="abstract" value="true"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="ioSpecification" ordered="false"
        eType="#//InputOutputSpecification" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="ioSpecification"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="boundaryEventRefs" ordered="false"
        upperBound="-1" eType="#//BoundaryEvent" transient="true" derived="true" resolveProxies="false"
        eOpposite="#//BoundaryEvent/attachedToRef"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="properties" ordered="false"
        upperBound="-1" eType="#//Property" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="property"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataInputAssociations"
        ordered="false" upperBound="-1" eType="#//DataInputAssociation" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="dataInputAssociation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataOutputAssociations"
        ordered="false" upperBound="-1" eType="#//DataOutputAssociation" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="dataOutputAssociation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="resources" ordered="false"
        upperBound="-1" eType="#//ResourceRole" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="resourceRole"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="group" value="http://www.omg.org/spec/BPMN/20100524/MODEL#resourceRole"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="loopCharacteristics" ordered="false"
        eType="#//LoopCharacteristics" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="loopCharacteristics"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="group" value="http://www.omg.org/spec/BPMN/20100524/MODEL#loopCharacteristics"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="completionQuantity" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt" defaultValueLiteral="1">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="completionQuantity"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="default" ordered="false"
        eType="#//SequenceFlow" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="default"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="isForCompensation" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="isForCompensation"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="startQuantity" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt" defaultValueLiteral="1">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="startQuantity"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EEnum" name="AdHocOrdering">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tAdHocOrdering"/>
    </eAnnotations>
    <eLiterals name="Parallel"/>
    <eLiterals name="Sequential" value="1"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="AdHocSubProcess" eSuperTypes="#//SubProcess">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tAdHocSubProcess"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="completionCondition" ordered="false"
        lowerBound="1" eType="#//Expression" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="completionCondition"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="cancelRemainingInstances"
        ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"
        defaultValueLiteral="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="cancelRemainingInstances"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="ordering" ordered="false"
        eType="#//AdHocOrdering">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="ordering"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Artifact" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tArtifact"/>
      <details key="kind" value="elementOnly"/>
      <details key="abstract" value="true"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Assignment" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tAssignment"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="from" ordered="false" lowerBound="1"
        eType="#//Expression" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="from"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="to" ordered="false" lowerBound="1"
        eType="#//Expression" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="to"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Association" eSuperTypes="#//Artifact">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tAssociation"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="associationDirection" ordered="false"
        eType="#//AssociationDirection" defaultValueLiteral="None">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="associationDirection"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="sourceRef" ordered="false"
        lowerBound="1" eType="#//BaseElement">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="sourceRef"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="targetRef" ordered="false"
        lowerBound="1" eType="#//BaseElement">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="targetRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EEnum" name="AssociationDirection">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tAssociationDirection"/>
    </eAnnotations>
    <eLiterals name="None"/>
    <eLiterals name="One" value="1"/>
    <eLiterals name="Both" value="2"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Auditing" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tAuditing"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tBaseElement"/>
      <details key="kind" value="elementOnly"/>
      <details key="abstract" value="true"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="extensionValues" ordered="false"
        upperBound="-1" eType="#//ExtensionAttributeValue" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="extensionElements"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="documentation" ordered="false"
        upperBound="-1" eType="#//Documentation" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="documentation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="extensionDefinitions" ordered="false"
        upperBound="-1" eType="#//ExtensionDefinition"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="id" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"
        iD="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="id"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="anyAttribute" unique="false"
        upperBound="-1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EFeatureMapEntry">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attributeWildcard"/>
        <details key="wildcards" value="##other"/>
        <details key="name" value=":3"/>
        <details key="processing" value="lax"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="BoundaryEvent" eSuperTypes="#//CatchEvent">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tBoundaryEvent"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="attachedToRef" ordered="false"
        lowerBound="1" eType="#//Activity" resolveProxies="false" eOpposite="#//Activity/boundaryEventRefs">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="attachedToRef"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="cancelActivity" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="cancelActivity"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="BusinessRuleTask" eSuperTypes="#//Task">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tBusinessRuleTask"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="implementation" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="implementation"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="CallActivity" eSuperTypes="#//Activity">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tCallActivity"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="calledElementRef" ordered="false"
        eType="#//CallableElement">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="calledElement"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="CallChoreography" eSuperTypes="#//ChoreographyActivity">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tCallChoreography"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="participantAssociations"
        ordered="false" upperBound="-1" eType="#//ParticipantAssociation" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="participantAssociation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="calledChoreographyRef"
        ordered="false" eType="#//Choreography">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="calledChoreographyRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="CallConversation" eSuperTypes="#//ConversationNode">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tCallConversation"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="participantAssociations"
        ordered="false" upperBound="-1" eType="#//ParticipantAssociation" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="participantAssociation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="calledCollaborationRef"
        ordered="false" eType="#//Collaboration">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="calledCollaborationRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="CallableElement" eSuperTypes="#//RootElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tCallableElement"/>
      <details key="kind" value="elementOnly"/>
      <details key="abstract" value="true"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="supportedInterfaceRefs"
        ordered="false" upperBound="-1" eType="#//Interface">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="supportedInterfaceRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="ioSpecification" ordered="false"
        eType="#//InputOutputSpecification" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="ioSpecification"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="ioBinding" ordered="false"
        upperBound="-1" eType="#//InputOutputBinding" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="ioBinding"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="CancelEventDefinition" eSuperTypes="#//EventDefinition">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tCancelEventDefinition"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="CatchEvent" abstract="true" eSuperTypes="#//Event">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tCatchEvent"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataOutputs" ordered="false"
        upperBound="-1" eType="#//DataOutput" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="dataOutput"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataOutputAssociation"
        ordered="false" upperBound="-1" eType="#//DataOutputAssociation" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="dataOutputAssociation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="outputSet" ordered="false"
        eType="#//OutputSet" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="outputSet"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="eventDefinitions" ordered="false"
        upperBound="-1" eType="#//EventDefinition" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="eventDefinition"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="group" value="http://www.omg.org/spec/BPMN/20100524/MODEL#eventDefinition"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="eventDefinitionRefs" ordered="false"
        upperBound="-1" eType="#//EventDefinition">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="eventDefinitionRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="parallelMultiple" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="parallelMultiple"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Category" eSuperTypes="#//RootElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tCategory"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="categoryValue" ordered="false"
        upperBound="-1" eType="#//CategoryValue" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="categoryValue"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="CategoryValue" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tCategoryValue"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="value" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="value"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="categorizedFlowElements"
        ordered="false" upperBound="-1" eType="#//FlowElement" changeable="false"
        volatile="true" transient="true" derived="true" resolveProxies="false"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Choreography" eSuperTypes="#//Collaboration #//FlowElementsContainer">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tChoreography"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ChoreographyActivity" abstract="true"
      eSuperTypes="#//FlowNode">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tChoreographyActivity"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="participantRefs" ordered="false"
        lowerBound="2" upperBound="-1" eType="#//Participant">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="participantRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="correlationKeys" ordered="false"
        upperBound="-1" eType="#//CorrelationKey" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="correlationKey"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="initiatingParticipantRef"
        ordered="false" lowerBound="1" eType="#//Participant">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="initiatingParticipantRef"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="loopType" ordered="false"
        eType="#//ChoreographyLoopType" defaultValueLiteral="None">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="loopType"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EEnum" name="ChoreographyLoopType">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tChoreographyLoopType"/>
    </eAnnotations>
    <eLiterals name="None"/>
    <eLiterals name="Standard" value="1"/>
    <eLiterals name="MultiInstanceSequential" value="2"/>
    <eLiterals name="MultiInstanceParallel" value="3"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ChoreographyTask" eSuperTypes="#//ChoreographyActivity">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tChoreographyTask"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="messageFlowRef" ordered="false"
        lowerBound="1" upperBound="2" eType="#//MessageFlow">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="messageFlowRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Collaboration" eSuperTypes="#//RootElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tCollaboration"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="participants" ordered="false"
        upperBound="-1" eType="#//Participant" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="participant"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="messageFlows" ordered="false"
        upperBound="-1" eType="#//MessageFlow" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="messageFlow"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="artifacts" ordered="false"
        upperBound="-1" eType="#//Artifact" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="artifact"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="group" value="http://www.omg.org/spec/BPMN/20100524/MODEL#artifact"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="conversations" ordered="false"
        upperBound="-1" eType="#//ConversationNode" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="conversationNode"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="group" value="http://www.omg.org/spec/BPMN/20100524/MODEL#conversationNode"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="conversationAssociations"
        ordered="false" upperBound="-1" eType="#//ConversationAssociation" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="conversationAssociation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="participantAssociations"
        ordered="false" upperBound="-1" eType="#//ParticipantAssociation" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="participantAssociation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="messageFlowAssociations"
        ordered="false" upperBound="-1" eType="#//MessageFlowAssociation" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="messageFlowAssociation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="correlationKeys" ordered="false"
        upperBound="-1" eType="#//CorrelationKey" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="correlationKey"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="choreographyRef" ordered="false"
        upperBound="-1" eType="#//Choreography">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="choreographyRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="conversationLinks" ordered="false"
        upperBound="-1" eType="#//ConversationLink" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="conversationLink"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="isClosed" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="isClosed"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="CompensateEventDefinition" eSuperTypes="#//EventDefinition">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tCompensateEventDefinition"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="activityRef" ordered="false"
        eType="#//Activity">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="activityRef"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="waitForCompletion" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="waitForCompletion"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ComplexBehaviorDefinition" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tComplexBehaviorDefinition"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="condition" ordered="false"
        lowerBound="1" eType="#//FormalExpression" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="condition"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="event" ordered="false"
        eType="#//ImplicitThrowEvent" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="event"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ComplexGateway" eSuperTypes="#//Gateway">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tComplexGateway"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="activationCondition" ordered="false"
        eType="#//Expression" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="activationCondition"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="default" ordered="false"
        eType="#//SequenceFlow" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="default"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ConditionalEventDefinition" eSuperTypes="#//EventDefinition">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tConditionalEventDefinition"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="condition" ordered="false"
        lowerBound="1" eType="#//Expression" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="condition"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Conversation" eSuperTypes="#//ConversationNode">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tConversation"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ConversationAssociation" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tConversationAssociation"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="innerConversationNodeRef"
        ordered="false" lowerBound="1" eType="#//ConversationNode">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="innerConversationNodeRef"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="outerConversationNodeRef"
        ordered="false" lowerBound="1" eType="#//ConversationNode">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="outerConversationNodeRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ConversationLink" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tConversationLink"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="sourceRef" ordered="false"
        lowerBound="1" eType="#//InteractionNode">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="sourceRef"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="targetRef" ordered="false"
        lowerBound="1" eType="#//InteractionNode">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="targetRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ConversationNode" eSuperTypes="#//BaseElement #//InteractionNode">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tConversationNode"/>
      <details key="kind" value="elementOnly"/>
      <details key="abstract" value="true"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="participantRefs" ordered="false"
        lowerBound="2" upperBound="-1" eType="#//Participant">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="participantRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="messageFlowRefs" ordered="false"
        upperBound="-1" eType="#//MessageFlow">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="messageFlowRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="correlationKeys" ordered="false"
        upperBound="-1" eType="#//CorrelationKey" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="correlationKey"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="CorrelationKey" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tCorrelationKey"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="correlationPropertyRef"
        ordered="false" upperBound="-1" eType="#//CorrelationProperty">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="correlationPropertyRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="CorrelationProperty" eSuperTypes="#//RootElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tCorrelationProperty"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="correlationPropertyRetrievalExpression"
        ordered="false" lowerBound="1" upperBound="-1" eType="#//CorrelationPropertyRetrievalExpression"
        containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="correlationPropertyRetrievalExpression"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="type" ordered="false" eType="#//ItemDefinition">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="type"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="CorrelationPropertyBinding" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tCorrelationPropertyBinding"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataPath" ordered="false"
        lowerBound="1" eType="#//FormalExpression" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="dataPath"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="correlationPropertyRef"
        ordered="false" lowerBound="1" eType="#//CorrelationProperty">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="correlationPropertyRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="CorrelationPropertyRetrievalExpression"
      eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tCorrelationPropertyRetrievalExpression"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="messagePath" ordered="false"
        lowerBound="1" eType="#//FormalExpression" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="messagePath"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="messageRef" ordered="false"
        lowerBound="1" eType="#//Message">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="messageRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="CorrelationSubscription" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tCorrelationSubscription"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="correlationPropertyBinding"
        ordered="false" upperBound="-1" eType="#//CorrelationPropertyBinding" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="correlationPropertyBinding"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="correlationKeyRef" ordered="false"
        lowerBound="1" eType="#//CorrelationKey">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="correlationKeyRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="DataAssociation" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tDataAssociation"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="sourceRef" ordered="false"
        upperBound="-1" eType="#//ItemAwareElement" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="sourceRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="targetRef" ordered="false"
        lowerBound="1" eType="#//ItemAwareElement" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="targetRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="transformation" ordered="false"
        eType="#//FormalExpression" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="transformation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="assignment" ordered="false"
        upperBound="-1" eType="#//Assignment" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="assignment"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="DataInput" eSuperTypes="#//ItemAwareElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tDataInput"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="inputSetWithOptional" ordered="false"
        upperBound="-1" eType="#//InputSet" transient="true" derived="true" eOpposite="#//InputSet/optionalInputRefs"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="inputSetWithWhileExecuting"
        ordered="false" upperBound="-1" eType="#//InputSet" transient="true" derived="true"
        eOpposite="#//InputSet/whileExecutingInputRefs"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="inputSetRefs" ordered="false"
        lowerBound="1" upperBound="-1" eType="#//InputSet" transient="true" derived="true"
        eOpposite="#//InputSet/dataInputRefs"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="isCollection" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="isCollection"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="DataInputAssociation" eSuperTypes="#//DataAssociation">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tDataInputAssociation"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="DataObject" eSuperTypes="#//FlowElement #//ItemAwareElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tDataObject"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="isCollection" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="isCollection"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="DataObjectReference" eSuperTypes="#//FlowElement #//ItemAwareElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tDataObjectReference"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataObjectRef" ordered="false"
        lowerBound="1" eType="#//DataObject" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="dataObjectRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="DataOutput" eSuperTypes="#//ItemAwareElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tDataOutput"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="outputSetWithOptional"
        ordered="false" upperBound="-1" eType="#//OutputSet" transient="true" derived="true"
        eOpposite="#//OutputSet/optionalOutputRefs"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="outputSetWithWhileExecuting"
        ordered="false" upperBound="-1" eType="#//OutputSet" transient="true" derived="true"
        eOpposite="#//OutputSet/whileExecutingOutputRefs"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="outputSetRefs" ordered="false"
        lowerBound="1" upperBound="-1" eType="#//OutputSet" transient="true" derived="true"
        eOpposite="#//OutputSet/dataOutputRefs"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="isCollection" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="isCollection"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="DataOutputAssociation" eSuperTypes="#//DataAssociation">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tDataOutputAssociation"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="DataState" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tDataState"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="DataStore" eSuperTypes="#//ItemAwareElement #//RootElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tDataStore"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="capacity" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="capacity"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="isUnlimited" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="isUnlimited"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="DataStoreReference" eSuperTypes="#//FlowElement #//ItemAwareElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tDataStoreReference"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataStoreRef" ordered="false"
        eType="#//DataStore">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="dataStoreRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Definitions" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tDefinitions"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="imports" ordered="false"
        upperBound="-1" eType="#//Import" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="import"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="extensions" ordered="false"
        upperBound="-1" eType="#//Extension" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="extension"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="rootElements" ordered="false"
        upperBound="-1" eType="#//RootElement" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="rootElement"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="group" value="http://www.omg.org/spec/BPMN/20100524/MODEL#rootElement"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="diagrams" ordered="false"
        upperBound="-1" eType="ecore:EClass BPMNDI.ecore#//BPMNDiagram" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="BPMNDiagram"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/DI"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="relationships" ordered="false"
        upperBound="-1" eType="#//Relationship" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="relationship"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="exporter" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="exporter"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="exporterVersion" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="exporterVersion"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="expressionLanguage" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" defaultValueLiteral="http://www.w3.org/1999/XPath">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="expressionLanguage"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="targetNamespace" ordered="false"
        lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="targetNamespace"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="typeLanguage" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" defaultValueLiteral="http://www.w3.org/2001/XMLSchema">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="typeLanguage"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Documentation" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tDocumentation"/>
      <details key="kind" value="mixed"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="mixed" unique="false" upperBound="-1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EFeatureMapEntry">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="elementWildcard"/>
        <details key="name" value=":mixed"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="text" ordered="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" volatile="true"
        derived="true"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="textFormat" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" defaultValueLiteral="text/plain">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="textFormat"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="EndEvent" eSuperTypes="#//ThrowEvent">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tEndEvent"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="EndPoint" eSuperTypes="#//RootElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tEndPoint"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Error" eSuperTypes="#//RootElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tError"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="errorCode" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="errorCode"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="structureRef" ordered="false"
        eType="#//ItemDefinition">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="structureRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ErrorEventDefinition" eSuperTypes="#//EventDefinition">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tErrorEventDefinition"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="errorRef" ordered="false"
        eType="#//Error">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="errorRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Escalation" eSuperTypes="#//RootElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tEscalation"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="escalationCode" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="escalationCode"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="structureRef" ordered="false"
        eType="#//ItemDefinition">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="structureRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="EscalationEventDefinition" eSuperTypes="#//EventDefinition">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tEscalationEventDefinition"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="escalationRef" ordered="false"
        eType="#//Escalation">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="escalationRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Event" abstract="true" eSuperTypes="#//FlowNode #//InteractionNode">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tEvent"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="properties" ordered="false"
        upperBound="-1" eType="#//Property" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="property"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="EventBasedGateway" eSuperTypes="#//Gateway">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tEventBasedGateway"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="eventGatewayType" ordered="false"
        eType="#//EventBasedGatewayType" defaultValueLiteral="Exclusive">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="eventGatewayType"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="instantiate" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="instantiate"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EEnum" name="EventBasedGatewayType">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tEventBasedGatewayType"/>
    </eAnnotations>
    <eLiterals name="Parallel"/>
    <eLiterals name="Exclusive" value="1"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="EventDefinition" eSuperTypes="#//RootElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tEventDefinition"/>
      <details key="kind" value="elementOnly"/>
      <details key="abstract" value="true"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ExclusiveGateway" eSuperTypes="#//Gateway">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tExclusiveGateway"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="default" ordered="false"
        eType="#//SequenceFlow" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="default"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Expression" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tExpression"/>
      <details key="kind" value="mixed"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Extension">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tExtension"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="definition" ordered="false"
        lowerBound="1" eType="#//ExtensionDefinition" containment="true"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="mustUnderstand" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="mustUnderstand"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="xsdDefinition" eType="ecore:EDataType http://www.eclipse.org/emf/2003/XMLType#//QName">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="definition"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ExtensionAttributeDefinition">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="type" ordered="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="isReference" ordered="false"
        lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"
        defaultValueLiteral="false"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="extensionDefinition" ordered="false"
        lowerBound="1" eType="#//ExtensionDefinition" transient="true" derived="true"
        resolveProxies="false" eOpposite="#//ExtensionDefinition/extensionAttributeDefinitions"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ExtensionAttributeValue">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tExtensionElements"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="valueRef" ordered="false"
        eType="ecore:EClass http://www.eclipse.org/emf/2002/Ecore#//EObject" transient="true"
        derived="true"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="value" unique="false" upperBound="-1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EFeatureMapEntry">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="elementWildcard"/>
        <details key="wildcards" value="##other"/>
        <details key="name" value=":0"/>
        <details key="processing" value="lax"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="extensionAttributeDefinition"
        ordered="false" lowerBound="1" eType="#//ExtensionAttributeDefinition" transient="true"
        derived="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ExtensionDefinition">
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="extensionAttributeDefinitions"
        ordered="false" upperBound="-1" eType="#//ExtensionAttributeDefinition" transient="true"
        derived="true" containment="true" resolveProxies="false" eOpposite="#//ExtensionAttributeDefinition/extensionDefinition"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="FlowElement" abstract="true" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tFlowElement"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="auditing" ordered="false"
        eType="#//Auditing" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="auditing"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="monitoring" ordered="false"
        eType="#//Monitoring" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="monitoring"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="categoryValueRef" ordered="false"
        upperBound="-1" eType="#//CategoryValue">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="categoryValueRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="FlowElementsContainer" abstract="true"
      eSuperTypes="#//BaseElement">
    <eStructuralFeatures xsi:type="ecore:EReference" name="laneSets" ordered="false"
        upperBound="-1" eType="#//LaneSet" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="laneSet"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="flowElements" ordered="false"
        upperBound="-1" eType="#//FlowElement" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="flowElement"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="group" value="http://www.omg.org/spec/BPMN/20100524/MODEL#flowElement"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="FlowNode" abstract="true" eSuperTypes="#//FlowElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tFlowNode"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="incoming" ordered="false"
        upperBound="-1" eType="#//SequenceFlow" resolveProxies="false" eOpposite="#//SequenceFlow/targetRef">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="incoming"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="lanes" ordered="false"
        upperBound="-1" eType="#//Lane" transient="true" derived="true" eOpposite="#//Lane/flowNodeRefs"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="outgoing" upperBound="-1"
        eType="#//SequenceFlow" resolveProxies="false" eOpposite="#//SequenceFlow/sourceRef">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="outgoing"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="FormalExpression" eSuperTypes="#//Expression">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tFormalExpression"/>
      <details key="kind" value="mixed"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="mixed" unique="false" upperBound="-1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EFeatureMapEntry">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="elementWildcard"/>
        <details key="name" value=":mixed"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="body" ordered="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" volatile="true"
        derived="true"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="evaluatesToTypeRef" ordered="false"
        lowerBound="1" eType="#//ItemDefinition">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="evaluatesToTypeRef"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="language" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="language"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Gateway" abstract="true" eSuperTypes="#//FlowNode">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tGateway"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="gatewayDirection" ordered="false"
        eType="#//GatewayDirection" defaultValueLiteral="Unspecified">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="gatewayDirection"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EEnum" name="GatewayDirection">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tGatewayDirection"/>
    </eAnnotations>
    <eLiterals name="Unspecified"/>
    <eLiterals name="Converging" value="1"/>
    <eLiterals name="Diverging" value="2"/>
    <eLiterals name="Mixed" value="3"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="GlobalBusinessRuleTask" eSuperTypes="#//GlobalTask">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tGlobalBusinessRuleTask"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="implementation" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="implementation"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="GlobalChoreographyTask" eSuperTypes="#//Choreography">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tGlobalChoreographyTask"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="initiatingParticipantRef"
        ordered="false" lowerBound="1" eType="#//Participant">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="initiatingParticipantRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="GlobalConversation" eSuperTypes="#//Collaboration">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tGlobalConversation"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="GlobalManualTask" eSuperTypes="#//GlobalTask">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tGlobalManualTask"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="GlobalScriptTask" eSuperTypes="#//GlobalTask">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tGlobalScriptTask"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="script" ordered="false"
        lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="script"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="scriptLanguage" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="scriptLanguage"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="GlobalTask" eSuperTypes="#//CallableElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tGlobalTask"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="resources" ordered="false"
        upperBound="-1" eType="#//ResourceRole" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="resourceRole"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="group" value="http://www.omg.org/spec/BPMN/20100524/MODEL#resourceRole"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="GlobalUserTask" eSuperTypes="#//GlobalTask">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tGlobalUserTask"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="renderings" ordered="false"
        upperBound="-1" eType="#//Rendering" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="rendering"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="implementation" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="implementation"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Group" eSuperTypes="#//Artifact">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tGroup"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="categoryValueRef" ordered="false"
        eType="#//CategoryValue">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="categoryValueRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="HumanPerformer" eSuperTypes="#//Performer">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tHumanPerformer"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ImplicitThrowEvent" eSuperTypes="#//ThrowEvent">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tImplicitThrowEvent"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Import">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tImport"/>
      <details key="kind" value="empty"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="importType" ordered="false"
        lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="importType"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="location" ordered="false"
        lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="location"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="namespace" ordered="false"
        lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="namespace"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="InclusiveGateway" eSuperTypes="#//Gateway">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tInclusiveGateway"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="default" ordered="false"
        eType="#//SequenceFlow" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="default"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="InputOutputBinding" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tInputOutputBinding"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="inputDataRef" ordered="false"
        lowerBound="1" eType="#//InputSet" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="inputDataRef"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="operationRef" ordered="false"
        lowerBound="1" eType="#//Operation">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="operationRef"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="outputDataRef" ordered="false"
        lowerBound="1" eType="#//OutputSet" resolveProxies="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="outputDataRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="InputOutputSpecification" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tInputOutputSpecification"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataInputs" ordered="false"
        upperBound="-1" eType="#//DataInput" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="dataInput"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataOutputs" ordered="false"
        upperBound="-1" eType="#//DataOutput" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="dataOutput"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="inputSets" ordered="false"
        lowerBound="1" upperBound="-1" eType="#//InputSet" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="inputSet"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="outputSets" ordered="false"
        lowerBound="1" upperBound="-1" eType="#//OutputSet" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="outputSet"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="InputSet" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tInputSet"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataInputRefs" ordered="false"
        upperBound="-1" eType="#//DataInput" resolveProxies="false" eOpposite="#//DataInput/inputSetRefs">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="dataInputRefs"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="optionalInputRefs" ordered="false"
        upperBound="-1" eType="#//DataInput" resolveProxies="false" eOpposite="#//DataInput/inputSetWithOptional">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="optionalInputRefs"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="whileExecutingInputRefs"
        ordered="false" upperBound="-1" eType="#//DataInput" resolveProxies="false"
        eOpposite="#//DataInput/inputSetWithWhileExecuting">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="whileExecutingInputRefs"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="outputSetRefs" ordered="false"
        upperBound="-1" eType="#//OutputSet" resolveProxies="false" eOpposite="#//OutputSet/inputSetRefs">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="outputSetRefs"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="InteractionNode">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="abstract" value="true"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="incomingConversationLinks"
        ordered="false" upperBound="-1" eType="#//ConversationLink" changeable="false"
        volatile="true" transient="true" derived="true" resolveProxies="false"/>
    <eStructuralFeatures xsi:type="ecore:EReference" name="outgoingConversationLinks"
        ordered="false" upperBound="-1" eType="#//ConversationLink" changeable="false"
        volatile="true" transient="true" derived="true"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Interface" eSuperTypes="#//RootElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tInterface"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="operations" ordered="false"
        lowerBound="1" upperBound="-1" eType="#//Operation" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="operation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="implementationRef" ordered="false"
        eType="ecore:EClass http://www.eclipse.org/emf/2002/Ecore#//EObject">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="implementationRef"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="IntermediateCatchEvent" eSuperTypes="#//CatchEvent">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tIntermediateCatchEvent"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="IntermediateThrowEvent" eSuperTypes="#//ThrowEvent">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tIntermediateThrowEvent"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ItemAwareElement" eSuperTypes="#//BaseElement">
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataState" ordered="false"
        eType="#//DataState" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="dataState"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="itemSubjectRef" ordered="false"
        eType="#//ItemDefinition">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="itemSubjectRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ItemDefinition" eSuperTypes="#//RootElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tItemDefinition"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="isCollection" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="isCollection"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="import" ordered="false"
        eType="#//Import" transient="true" derived="true"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="itemKind" ordered="false"
        eType="#//ItemKind" defaultValueLiteral="Information">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="itemKind"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="structureRef" ordered="false"
        eType="ecore:EClass http://www.eclipse.org/emf/2002/Ecore#//EObject">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="structureRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EEnum" name="ItemKind">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tItemKind"/>
    </eAnnotations>
    <eLiterals name="Physical"/>
    <eLiterals name="Information" value="1"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Lane" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tLane"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="partitionElement" ordered="false"
        eType="#//BaseElement" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="partitionElement"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="flowNodeRefs" ordered="false"
        upperBound="-1" eType="#//FlowNode" resolveProxies="false" eOpposite="#//FlowNode/lanes">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="flowNodeRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="childLaneSet" ordered="false"
        eType="#//LaneSet" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="childLaneSet"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="partitionElementRef" ordered="false"
        eType="#//BaseElement">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="partitionElementRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="LaneSet" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tLaneSet"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="lanes" ordered="false"
        upperBound="-1" eType="#//Lane" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="lane"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="LinkEventDefinition" eSuperTypes="#//EventDefinition">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tLinkEventDefinition"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="source" ordered="false"
        upperBound="-1" eType="#//LinkEventDefinition" eOpposite="#//LinkEventDefinition/target">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="source"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="target" ordered="false"
        eType="#//LinkEventDefinition" eOpposite="#//LinkEventDefinition/source">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="target"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="LoopCharacteristics" abstract="true"
      eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tLoopCharacteristics"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ManualTask" eSuperTypes="#//Task">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tManualTask"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Message" eSuperTypes="#//RootElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tMessage"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="itemRef" ordered="false"
        eType="#//ItemDefinition">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="itemRef"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="MessageEventDefinition" eSuperTypes="#//EventDefinition">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tMessageEventDefinition"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="operationRef" ordered="false"
        eType="#//Operation">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="operationRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="messageRef" ordered="false"
        eType="#//Message">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="messageRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="MessageFlow" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tMessageFlow"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="messageRef" ordered="false"
        eType="#//Message">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="messageRef"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="sourceRef" ordered="false"
        lowerBound="1" eType="#//InteractionNode">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="sourceRef"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="targetRef" ordered="false"
        lowerBound="1" eType="#//InteractionNode">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="targetRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="MessageFlowAssociation" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tMessageFlowAssociation"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="innerMessageFlowRef" ordered="false"
        lowerBound="1" eType="#//MessageFlow">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="innerMessageFlowRef"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="outerMessageFlowRef" ordered="false"
        lowerBound="1" eType="#//MessageFlow">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="outerMessageFlowRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Monitoring" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tMonitoring"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EEnum" name="MultiInstanceBehavior">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tMultiInstanceFlowCondition"/>
    </eAnnotations>
    <eLiterals name="None"/>
    <eLiterals name="One" value="1"/>
    <eLiterals name="All" value="2"/>
    <eLiterals name="Complex" value="3"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="MultiInstanceLoopCharacteristics" eSuperTypes="#//LoopCharacteristics">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tMultiInstanceLoopCharacteristics"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="loopCardinality" ordered="false"
        eType="#//Expression" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="loopCardinality"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="loopDataInputRef" ordered="false"
        eType="#//ItemAwareElement">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="loopDataInputRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="loopDataOutputRef" ordered="false"
        eType="#//ItemAwareElement">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="loopDataOutputRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="inputDataItem" ordered="false"
        eType="#//DataInput" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="inputDataItem"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="outputDataItem" ordered="false"
        eType="#//DataOutput" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="outputDataItem"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="complexBehaviorDefinition"
        ordered="false" upperBound="-1" eType="#//ComplexBehaviorDefinition" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="complexBehaviorDefinition"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="completionCondition" ordered="false"
        eType="#//Expression" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="completionCondition"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="behavior" ordered="false"
        eType="#//MultiInstanceBehavior" defaultValueLiteral="All">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="behavior"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="isSequential" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="isSequential"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="noneBehaviorEventRef" ordered="false"
        eType="#//EventDefinition">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="noneBehaviorEventRef"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="oneBehaviorEventRef" ordered="false"
        eType="#//EventDefinition">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="oneBehaviorEventRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Operation" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tOperation"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="inMessageRef" ordered="false"
        lowerBound="1" eType="#//Message">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="inMessageRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="outMessageRef" ordered="false"
        eType="#//Message">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="outMessageRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="errorRefs" ordered="false"
        upperBound="-1" eType="#//Error">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="errorRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="implementationRef" ordered="false"
        eType="ecore:EClass http://www.eclipse.org/emf/2002/Ecore#//EObject">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="implementationRef"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="OutputSet" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tOutputSet"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataOutputRefs" ordered="false"
        upperBound="-1" eType="#//DataOutput" resolveProxies="false" eOpposite="#//DataOutput/outputSetRefs">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="dataOutputRefs"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="optionalOutputRefs" ordered="false"
        upperBound="-1" eType="#//DataOutput" resolveProxies="false" eOpposite="#//DataOutput/outputSetWithOptional">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="optionalOutputRefs"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="whileExecutingOutputRefs"
        ordered="false" upperBound="-1" eType="#//DataOutput" resolveProxies="false"
        eOpposite="#//DataOutput/outputSetWithWhileExecuting">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="whileExecutingOutputRefs"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="inputSetRefs" ordered="false"
        upperBound="-1" eType="#//InputSet" resolveProxies="false" eOpposite="#//InputSet/outputSetRefs">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="inputSetRefs"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ParallelGateway" eSuperTypes="#//Gateway">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tParallelGateway"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Participant" eSuperTypes="#//BaseElement #//InteractionNode">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tParticipant"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="interfaceRefs" ordered="false"
        upperBound="-1" eType="#//Interface">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="interfaceRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="endPointRefs" ordered="false"
        upperBound="-1" eType="#//EndPoint">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="endPointRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="participantMultiplicity"
        ordered="false" eType="#//ParticipantMultiplicity" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="participantMultiplicity"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="processRef" ordered="false"
        eType="#//Process">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="processRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ParticipantAssociation" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tParticipantAssociation"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="innerParticipantRef" ordered="false"
        lowerBound="1" eType="#//Participant">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="innerParticipantRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="outerParticipantRef" ordered="false"
        lowerBound="1" eType="#//Participant">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="outerParticipantRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ParticipantMultiplicity" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tParticipantMultiplicity"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="maximum" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt" defaultValueLiteral="1">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="maximum"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="minimum" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt" defaultValueLiteral="0">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="minimum"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="PartnerEntity" eSuperTypes="#//RootElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tPartnerEntity"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="participantRef" ordered="false"
        upperBound="-1" eType="#//Participant">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="participantRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="PartnerRole" eSuperTypes="#//RootElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tPartnerRole"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="participantRef" ordered="false"
        upperBound="-1" eType="#//Participant">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="participantRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Performer" eSuperTypes="#//ResourceRole">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tPerformer"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="PotentialOwner" eSuperTypes="#//HumanPerformer">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tPotentialOwner"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Process" eSuperTypes="#//CallableElement #//FlowElementsContainer">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tProcess"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="auditing" ordered="false"
        eType="#//Auditing" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="auditing"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="monitoring" ordered="false"
        eType="#//Monitoring" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="monitoring"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="properties" ordered="false"
        upperBound="-1" eType="#//Property" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="property"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="artifacts" ordered="false"
        upperBound="-1" eType="#//Artifact" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="artifact"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="group" value="http://www.omg.org/spec/BPMN/20100524/MODEL#artifact"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="resources" ordered="false"
        upperBound="-1" eType="#//ResourceRole" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="resourceRole"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="group" value="http://www.omg.org/spec/BPMN/20100524/MODEL#resourceRole"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="correlationSubscriptions"
        ordered="false" upperBound="-1" eType="#//CorrelationSubscription" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="correlationSubscription"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="supports" ordered="false"
        upperBound="-1" eType="#//Process">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="supports"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="definitionalCollaborationRef"
        ordered="false" eType="#//Collaboration">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="definitionalCollaborationRef"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="isClosed" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="isClosed"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="isExecutable" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="isExecutable"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="processType" ordered="false"
        eType="#//ProcessType" defaultValueLiteral="None">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="processType"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EEnum" name="ProcessType">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tProcessType"/>
    </eAnnotations>
    <eLiterals name="None"/>
    <eLiterals name="Public" value="1"/>
    <eLiterals name="Private" value="2"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Property" eSuperTypes="#//ItemAwareElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tProperty"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ReceiveTask" eSuperTypes="#//Task">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tReceiveTask"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="implementation" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="implementation"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="instantiate" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="instantiate"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="messageRef" ordered="false"
        eType="#//Message">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="messageRef"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="operationRef" ordered="false"
        eType="#//Operation">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="operationRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Relationship" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tRelationship"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="sources" ordered="false"
        lowerBound="1" upperBound="-1" eType="ecore:EClass http://www.eclipse.org/emf/2002/Ecore#//EObject">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="source"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="targets" ordered="false"
        lowerBound="1" upperBound="-1" eType="ecore:EClass http://www.eclipse.org/emf/2002/Ecore#//EObject">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="target"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="direction" ordered="false"
        eType="#//RelationshipDirection">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="direction"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="type" ordered="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="type"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EEnum" name="RelationshipDirection">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tRelationshipDirection"/>
    </eAnnotations>
    <eLiterals name="None"/>
    <eLiterals name="Forward" value="1"/>
    <eLiterals name="Backward" value="2"/>
    <eLiterals name="Both" value="3"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Rendering" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tRendering"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Resource" eSuperTypes="#//RootElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tResource"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="resourceParameters" ordered="false"
        upperBound="-1" eType="#//ResourceParameter" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="resourceParameter"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ResourceAssignmentExpression" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tResourceAssignmentExpression"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="expression" ordered="false"
        lowerBound="1" eType="#//Expression" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="expression"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="group" value="http://www.omg.org/spec/BPMN/20100524/MODEL#expression"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ResourceParameter" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tResourceParameter"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="isRequired" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="isRequired"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="type" ordered="false" eType="#//ItemDefinition">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="type"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ResourceParameterBinding" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tResourceParameterBinding"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="expression" ordered="false"
        lowerBound="1" eType="#//Expression" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="expression"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="group" value="http://www.omg.org/spec/BPMN/20100524/MODEL#expression"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="parameterRef" ordered="false"
        lowerBound="1" eType="#//ResourceParameter">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="parameterRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ResourceRole" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tResourceRole"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="resourceRef" ordered="false"
        eType="#//Resource">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="resourceRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="resourceParameterBindings"
        ordered="false" upperBound="-1" eType="#//ResourceParameterBinding" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="resourceParameterBinding"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="resourceAssignmentExpression"
        ordered="false" eType="#//ResourceAssignmentExpression" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="resourceAssignmentExpression"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="RootElement" eSuperTypes="#//BaseElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tRootElement"/>
      <details key="kind" value="elementOnly"/>
      <details key="abstract" value="true"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ScriptTask" eSuperTypes="#//Task">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tScriptTask"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="script" ordered="false"
        lowerBound="1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="script"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="scriptFormat" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="scriptFormat"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="SendTask" eSuperTypes="#//Task">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tSendTask"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="implementation" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="implementation"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="messageRef" ordered="false"
        eType="#//Message">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="messageRef"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="operationRef" ordered="false"
        eType="#//Operation">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="operationRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="SequenceFlow" eSuperTypes="#//FlowElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tSequenceFlow"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="conditionExpression" ordered="false"
        eType="#//Expression" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="conditionExpression"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="isImmediate" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="isImmediate"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="sourceRef" ordered="false"
        lowerBound="1" eType="#//FlowNode" resolveProxies="false" eOpposite="#//FlowNode/outgoing">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="sourceRef"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="targetRef" ordered="false"
        lowerBound="1" eType="#//FlowNode" resolveProxies="false" eOpposite="#//FlowNode/incoming">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="targetRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ServiceTask" eSuperTypes="#//Task">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tServiceTask"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="implementation" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="implementation"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="operationRef" ordered="false"
        eType="#//Operation">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="operationRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Signal" eSuperTypes="#//RootElement">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tSignal"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" ordered="false" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="name"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="structureRef" ordered="false"
        eType="#//ItemDefinition">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="structureRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="SignalEventDefinition" eSuperTypes="#//EventDefinition">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tSignalEventDefinition"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="signalRef" ordered="false"
        eType="#//Signal">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="signalRef"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="StandardLoopCharacteristics" eSuperTypes="#//LoopCharacteristics">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tStandardLoopCharacteristics"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="loopCondition" ordered="false"
        eType="#//Expression" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="loopCondition"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="loopMaximum" eType="ecore:EDataType http://www.eclipse.org/emf/2003/XMLType#//Int">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="loopMaximum"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="testBefore" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="testBefore"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="StartEvent" eSuperTypes="#//CatchEvent">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tStartEvent"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="isInterrupting" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="isInterrupting"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="SubChoreography" eSuperTypes="#//ChoreographyActivity #//FlowElementsContainer">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tSubChoreography"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="artifacts" ordered="false"
        upperBound="-1" eType="#//Artifact" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="artifact"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="group" value="http://www.omg.org/spec/BPMN/20100524/MODEL#artifact"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="SubConversation" eSuperTypes="#//ConversationNode">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tSubConversation"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="conversationNodes" ordered="false"
        upperBound="-1" eType="#//ConversationNode" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="conversationNode"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="group" value="http://www.omg.org/spec/BPMN/20100524/MODEL#conversationNode"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="SubProcess" eSuperTypes="#//Activity #//FlowElementsContainer">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tSubProcess"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="artifacts" ordered="false"
        upperBound="-1" eType="#//Artifact" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="artifact"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="group" value="http://www.omg.org/spec/BPMN/20100524/MODEL#artifact"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="triggeredByEvent" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean" defaultValueLiteral="false">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="triggeredByEvent"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Task" eSuperTypes="#//Activity #//InteractionNode">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tTask"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="TerminateEventDefinition" eSuperTypes="#//EventDefinition">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tTerminateEventDefinition"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="TextAnnotation" eSuperTypes="#//Artifact">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tTextAnnotation"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="text" ordered="false" lowerBound="1"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="text"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="textFormat" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" defaultValueLiteral="text/plain">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="textFormat"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="ThrowEvent" abstract="true" eSuperTypes="#//Event">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tThrowEvent"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataInputs" ordered="false"
        upperBound="-1" eType="#//DataInput" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="dataInput"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="dataInputAssociation" ordered="false"
        upperBound="-1" eType="#//DataInputAssociation" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="dataInputAssociation"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="inputSet" ordered="false"
        eType="#//InputSet" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="inputSet"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="eventDefinitions" ordered="false"
        upperBound="-1" eType="#//EventDefinition" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="eventDefinition"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
        <details key="group" value="http://www.omg.org/spec/BPMN/20100524/MODEL#eventDefinition"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="eventDefinitionRefs" ordered="false"
        upperBound="-1" eType="#//EventDefinition">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="eventDefinitionRef"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="TimerEventDefinition" eSuperTypes="#//EventDefinition">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tTimerEventDefinition"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="timeDate" ordered="false"
        eType="#//Expression" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="timeDate"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="timeDuration" ordered="false"
        eType="#//Expression" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="timeDuration"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EReference" name="timeCycle" ordered="false"
        eType="#//Expression" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="timeCycle"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Transaction" eSuperTypes="#//SubProcess">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tTransaction"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="protocol" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="method" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="method"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="UserTask" eSuperTypes="#//Task">
    <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
      <details key="name" value="tUserTask"/>
      <details key="kind" value="elementOnly"/>
    </eAnnotations>
    <eStructuralFeatures xsi:type="ecore:EReference" name="renderings" ordered="false"
        upperBound="-1" eType="#//Rendering" containment="true">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="element"/>
        <details key="name" value="rendering"/>
        <details key="namespace" value="http://www.omg.org/spec/BPMN/20100524/MODEL"/>
      </eAnnotations>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="implementation" ordered="false"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
      <eAnnotations source="http:///org/eclipse/emf/ecore/util/ExtendedMetaData">
        <details key="kind" value="attribute"/>
        <details key="name" value="implementation"/>
      </eAnnotations>
    </eStructuralFeatures>
  </eClassifiers>
</ecore:EPackage>
`;

}
