import React,{useEffect} from 'react'
import Proptypes from 'prop-types'

export const BaseShareButton =({
    linkTitle,
    linkClassname,
    linkEventLabel,
    addThisPubId,
    googleAlalyticsId,
    contentTitle,
    contentImage,
    contentDescription,
    children,
}) => {
    const id = 'social-share'
    const src = '//s7.addthis.com/js/300/addthis_widget.js#pubid=' + addThisPubId
    const options={
        config:{
            data_ga_property: googleAlalyticsId,
            data_ga_social: true,
            ui_click: true,
        },
        share:{
            url_transforms:{
                shoten:{
                    twitter:'bitly',
                },
            },
        
        shortners:{
            bitly:{},
        },
        title: contentTitle,
        media: contentImage,
        description: contentDescription
    },
    }
    useEffect (() => {
        window.addthis_config = options.config
        window.addthis_share = options.share
        
        return() =>{
            delete window.addthis_config
            delete window.addthis_share
        }
    })
    useEffect (()=>{
        if(document.getElementById(id)) return

        const script = document.createElement('script')
        script.id = id
        script.src = src
        script.async = true
        document.body.appendChild(script)
    }, [])

    return(
        <a
        href="javascript:void(0)"
        title={linkTitle}
        className={linkClassname}
        data-eventcategory="Social Share"
        data-eventlabel={linkEventLabel}
        >
        {children}
        </a>
    )
}
BaseShareButton.propTypes ={
    linkTitle: propTypes.string.isRequired,
    linkClassname: propTypes.string.isRequired,
    linkEventLabel: propTypes.string.isRequired,
    addThisPubId: propTypes.string.isRequired,
    googleAlalyticsId: propTypes.string.isRequired,
    contentTitle: propTypes.string.isRequired,
    contentImage: propTypes.string.isRequired,
    contentDescription: propTypes.string.isRequired,
    children: propTypes.node.isReuired,
}