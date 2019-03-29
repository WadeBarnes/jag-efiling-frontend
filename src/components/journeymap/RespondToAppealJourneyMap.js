import React from 'react';
import FormIcon from './journeyicons/FormIcon';
import GavelIcon from './journeyicons/GavelIcon';
import Trail from './Trail';
import EndCircle from './journeyicons/EndCircle';
let JOURNEY_TYPE = require('../../helpers/constants')
let cn = require('classnames');

class RespondToAppealJourneyMap extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: props.journey ? props.journey.id : null,
            userid: props.journey ? props.journey.userid : null,
            steps: props.journey ? JSON.parse(props.journey.steps) :
                [
                    {status: props.case ? props.case.status.toLowerCase() : 'new', type: 'form-2'},
                    {status: 'new', type: 'package'},
                    {status: 'new', type: 'file'},
                    {status: 'new', type: 'hearing'},
                    {status: 'new', type: 'courtorder'}],
            case: props.case
        }
        this.updateStepStatus = this.updateStepStatus.bind(this);
        this.getStepStatus = this.getStepStatus.bind(this);
    }
    
    componentDidMount() {
        if (this.props.case) {
            this.updateStepStatus(1, this.props.case.status.toLowerCase())
        }
    }
    
    render() {
        return (
            <div className={"journey-map-container"}>
                <div className={cn("journey-start-circle", {"completed-step": this.state.steps[0].status !== 'new'})} />
                <Trail
                    className={"journey-trail-l1-l2"}
                    completed={this.state.steps[0].status !== 'new'}
                    lineCompleted={this.state.steps[2].status === 'completed'}
                    width={'15%'}
                    level={1}
                />
                <FormIcon style={{left:'20%'}}
                          twoPages={false}
                          stepTitle={"Notice of Appearance"}
                          action={this.iconClicked.bind(this, 'appearance')}
                          active={true}
                          order={1}
                          status={this.getStepStatus(1)}
                          completed={this.stepCompleted.bind(this)}
                          ready={this.props.isStepReady(1, this.state.steps)}
                />
                <Trail
                    className={"journey-trail-l1-l2"}
                    completed={this.state.steps[0].status === 'completed'}
                    lineCompleted={this.state.steps[2].status === 'completed'}
                    width={'24%'}
                    level={1}
                />
                <FormIcon style={{left:'44%' }}
                          twoPages={false}
                          stepTitle={"Notice of Cross Appeal"}
                          stepTitleOptional={"(optional)"}
                          action={this.iconClicked.bind(this, 'crossappeal')}
                          active={true}
                          order={2}
                          status={this.getStepStatus(2)}
                          completed={this.stepCompleted.bind(this)}
                          ready={this.props.isStepReady(2,this.state.steps)}
                    />
                
              <Trail
                  className={"journey-trail-l1-l2"}
                  completed={this.state.steps[1].status === 'completed'}
                  lineCompleted={this.state.steps[2].status === 'completed'}
                  width={'24%'}
                  level={1}
              />
                <FormIcon style={{left:'68%'}}
                          twoPages={true}
                          stepTitle={"Factum and Appeal Book"}
                          action={this.iconClicked.bind(this, 'respondentfactum')}
                          active={true}
                          order={3}
                          status={this.getStepStatus(3)}
                          completed={this.stepCompleted.bind(this)}
                          ready={this.props.isStepReady(3, this.state.steps)}
                />
                <div className={cn("journey-right-curve",{'completed-curve': this.state.steps[2].status === 'completed'})} />
                <div className={cn("journey-left-curve",{'completed-left-curve': this.state.steps[2].status === 'completed'})} />
                
                
                <Trail
                    className={"journey-trail-l2-l3 last-row"}
                    completed={this.state.steps[2].status === 'completed'}
                    width={'25%'}
                    level={2}
                />
                <GavelIcon style={{top:'55%', left: '30%'}}
                           stepTitle={"The Hearing"}
                           action={this.iconClicked.bind(this, 'respondenthearing')}
                           active={true}
                           order={4}
                           status={this.getStepStatus(4)}
                           completed={this.stepCompleted.bind(this)}
                           ready={this.props.isStepReady(4, this.state.steps)}
                />
                <Trail
                    className={"journey-trail-l2-l3 last-row"}
                    completed={this.state.steps[3].status === 'completed'}
                    width={'30%'}
                    level={2}
                />
                <FormIcon style={{top:'55%', left: '57%'}}
                          twoPages={false}
                          stepTitle={"Court Order"}
                          stepTitleOptional={"(if required)"}
                          action={this.iconClicked.bind(this, 'courtorder')}
                          active={true}
                          order={5}
                          status={this.getStepStatus(5)}
                          completed={this.stepCompleted.bind(this)}
                          ready={this.props.isStepReady(5, this.state.steps)}
                />
                <Trail
                    className={"journey-trail-l2-l3 last-row"}
                    completed={this.state.steps[4].status === 'completed'}
                    width={'25%'}
                    level={2}
                />
                <EndCircle
                    stepTitle={"Appeal Process Complete"}
                    action={this.iconClicked.bind(this,'respondentcomplete')}
                    active={true}
                    completed={this.state.steps[4].status === 'completed'}
                    style={{top: '55%', left: '80%'}}

                />
            </div>
        );
    }
    
    iconClicked(action) {
        this.props.iconClicked(action)
    }
    
    getStepStatus(stepNumber) {
        return this.state.steps[stepNumber - 1].status;
    }
    
    updateStepStatus(stepNumber, newStatus){
        let steps = this.state.steps;
        steps[stepNumber - 1].status = newStatus;
        this.setState({steps: steps}, this.props.createOrUpdateJourney(this.state.steps,JOURNEY_TYPE.JOURNEY_TYPE_RESPOND_TO_NOTICE_OF_APPEAL, this.setId.bind(this)));
    }
    
    stepCompleted(stepNumber, isComplete) {
        this.updateStepStatus(stepNumber, isComplete ? 'completed' : 'new');
    }

    setId(id) {
        this.setState({id:id})
    }
}
export default RespondToAppealJourneyMap;